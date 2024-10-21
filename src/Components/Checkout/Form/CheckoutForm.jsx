import React from 'react'
import { CheckoutContainer, FormContainer, FormikContainer } from './CheckoutFormStyled';
import { Formik } from 'formik';
import Submit from '../../../UI/Submit/Submit';
import Input from '../../../UI/Input/Input';
import { Form } from 'react-router-dom';
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
            >
            
          </Input>

          <Input
            name='cellphone'
            id='celular'
            type='text'
            htmlFor='celular'
            placeholder='Tu celular'
            label="Celular"
            >
            
          </Input>

          <Input
            name='location'
            id='localidad'
            type='text'
            htmlFor='localidad'
            placeholder='Tu localidad'
            label="Localidad"
          >
            
          </Input>

          <Input
            name='address'
            id='dirección'
            type='text'
            htmlFor='direccion'
            placeholder='Tu dirección'
            label="Dirección"
          >
            
          </Input>


<Submit enviado={isSubmitting ? true : false}>{isSubmitting ? 'Iniciando pedido' : 'Iniciar pedido'}</Submit>


</FormContainer>
}



</FormikContainer>

  </CheckoutContainer>
  )
}

export default CheckoutForm
