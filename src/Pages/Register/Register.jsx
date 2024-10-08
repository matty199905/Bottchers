import React from 'react'
import { FormContainer, RegisterWrapper, YaEstoyRegistrado } from './RegisterStyled'
import { Formik } from 'formik'
import Input from '../../UI/Input/Input'
import { registerInitialValues } from '../../Formik/InitialValues'
import Submit from '../../UI/Submit/Submit'
import { registerValidationSchema } from '../../Formik/ValidationSchema'

const Register = () => {
  return (
   <RegisterWrapper>
<h1>Registrate ahora.</h1>
<span>Completa los datos para registrarte</span>


<Formik
initialValues={registerInitialValues}
validationSchema={registerValidationSchema}
onSubmit={(values)=> {
  console.log(values);
  
}}>

{ ({isSubmitting}) =>

<FormContainer>

<Input
name='name'
id='nombre'
htmlFor='nombre'
placeholder='Ingrese su Nombre aqui...'
label='Nombre'
type='text'
register='true'/>

<Input
name='surname'
id='apellido'
htmlFor='apellido'
placeholder='Ingrese su Apellido aqui...'
label='Apellido'
type='text'
register='true'/>

<Input
name='email'
id='email'
htmlFor='email'
placeholder='Ingrese su Email aqui...'
label='Email'
type='email'
register='true'/>

<Input
name='password'
id='contraseña'
htmlFor='contraseña'
placeholder='Ingrese su Contraseña aqui...'
label='Contraseña'
type='password'
register='true'/>


<Submit register='true'
enviado={isSubmitting ? true : false}
>{isSubmitting ? 'Registrado con Exito' : 'Enviar'}</Submit>


</FormContainer>

}

</Formik>

<YaEstoyRegistrado to='/login'>Ya estas Registrado? Inicia Sesion Aquí.</YaEstoyRegistrado>


   </RegisterWrapper>
  )
}

export default Register
