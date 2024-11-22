import React from 'react'
import { CheckoutContainer, FormContainer, FormikContainer } from './CheckoutFormStyled';
import Submit from '../../../UI/Submit/Submit';
import Input from '../../../UI/Input/Input';
import { checkoutInitialValues } from '../../../Formik/InitialValues';
import { checkoutValidationSchema } from '../../../Formik/ValidationSchema';



const CheckoutForm = () => {


  return (
  <CheckoutContainer>
<h2>Ingresa tus Datos</h2>

<FormikContainer
initialValues={checkoutInitialValues}
validationSchema={checkoutValidationSchema}
onSubmit={""}>


{ ({isSubmitting}) =>

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


<Submit enviado={isSubmitting ? true : false}>

  {isSubmitting ? 'Iniciando pedido' : 'Iniciar pedido'}
  
  </Submit>


</FormContainer>
}



</FormikContainer>

  </CheckoutContainer>
  )
}

export default CheckoutForm
