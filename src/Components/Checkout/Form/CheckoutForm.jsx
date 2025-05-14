import React from 'react'
import { CheckoutContainer, FormContainer, FormikContainer } from './CheckoutFormStyled';
import Submit from '../../../UI/Submit/Submit';
import Input from '../../../UI/Input/Input';
import { checkoutInitialValues } from '../../../Formik/InitialValues';
import { checkoutValidationSchema } from '../../../Formik/ValidationSchema';
import { useSelector, useDispatch } from 'react-redux'
import { createOrder } from '../../../Axios/axiosOrders';
import { useNavigate } from 'react-router-dom';
import { removeAllFromCart } from '../../../Redux/Cart/cartSlice';
import { clearError } from '../../../Redux/Orders/ordersSlice';

const CheckoutForm = () => {

  const { token } = useSelector(state => state.user.currentUser)
  const { shippingCost, cartProducts } = useSelector(state => state.cart)
  const errorMessage = useSelector(state => state.orders.error)
  const navigate = useNavigate()

  const dispatch = useDispatch()


  const totalPrice = cartProducts.map((item) => item.quantity * item.price).reduce((acc, cur) => { return acc + cur }, 0)


  return (
    <CheckoutContainer>
      <h2>Ingresa tus Datos</h2>

      <FormikContainer
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {

          const orderData = {
            items: cartProducts, price: totalPrice, shippingCost, total: totalPrice + shippingCost, shippingDetails: { ...values },
          };



          try {

            await createOrder(orderData, token, dispatch)


          }

          catch (error) {

            return alert(errorMessage)

          }

          if (errorMessage === "Network Error" || errorMessage === "Request failed with status code 401") {
            alert('Su inicio de sesion ha expirado. Intente loguearse nuevamente.');
            return dispatch(clearError());
          }

          else if (errorMessage && (errorMessage !== "Network Error" || errorMessage !== "Request failed with status code 401")) {
            alert("Error al crear la Orden");
            return dispatch(clearError());
          }

          else { navigate('/orders'); return dispatch(removeAllFromCart()) };
        }
        }>


        {({ isSubmitting }) =>

          <FormContainer>


            <Input
              name='name'
              id='nombre'
              type='text'
              htmlFor='nombre'
              placeholder='Tu nombre'
              label="Nombre"
              checkout='true'
            >

            </Input>

            <Input
              name='cellphone'
              id='celular'
              type='text'
              htmlFor='celular'
              placeholder='Tu celular'
              label="Celular"
              checkout='true'
            >

            </Input>

            <Input
              name='location'
              id='localidad'
              type='text'
              htmlFor='localidad'
              placeholder='Tu localidad'
              label="Localidad"
              checkout='true'
            >

            </Input>

            <Input
              name='address'
              id='dirección'
              type='text'
              htmlFor='direccion'
              placeholder='Tu dirección'
              label="Dirección"
              checkout='true'
            >

            </Input>


            <Submit
              checkout={true}>

              {isSubmitting ? 'Iniciando pedido' : 'Iniciar pedido'}

            </Submit>


          </FormContainer>
        }



      </FormikContainer>

    </CheckoutContainer>
  )
}

export default CheckoutForm
