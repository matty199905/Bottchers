import React from 'react'
import { FormContainer, RegisterWrapper, YaEstoyRegistrado } from './RegisterStyled'
import { Formik } from 'formik'
import Input from '../../UI/Input/Input'
import { registerInitialValues } from '../../Formik/InitialValues'
import Submit from '../../UI/Submit/Submit'
import { registerValidationSchema } from '../../Formik/ValidationSchema'
import { Body } from '../Login/LoginStyled'
import { createUser} from '../../Axios/axiosUser'
import { useNavigate } from 'react-router-dom'

const Register = () => {

const navigate = useNavigate()

  return (
    <Body>
   <RegisterWrapper>
<h1>Registrate ahora.</h1>
<span>Completa los datos para registrarte</span>


<Formik
initialValues={registerInitialValues}
validationSchema={registerValidationSchema}
onSubmit={async(values, {resetForm})=> {

  const user = await createUser(values.name, values.email, values.password)

if(user) {
navigate('/login')
}

return resetForm
  
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
register='true'
onCopy={(e)=> e.preventDefault()}
/>


<Input 
name='password2'
id='contraseña2'
htmlFor='contraseña2'
placeholder='Ingrese su Contraseña aqui...'
label='Repita su Contraseña'
type='password'
register='true'
onCopy={(e)=> e.preventDefault()}
/>


<Submit register='true'
enviado={isSubmitting ? true : false}
>{isSubmitting ? 'Registrado con Exito' : 'Enviar'}</Submit>


</FormContainer>

}

</Formik>

<YaEstoyRegistrado to='/login'>Ya estas Registrado? Inicia Sesion Aquí.</YaEstoyRegistrado>


   </RegisterWrapper>
   </Body>
  )
}

export default Register
