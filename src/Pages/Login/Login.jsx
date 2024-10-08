import React from 'react'
import { LoginWrapper, NoTengoCuenta } from './LoginStyled';
import { Formik } from 'formik';
import Input from '../../UI/Input/Input';
import { LoginFormContainer } from './LoginStyled';
import Submit from '../../UI/Submit/Submit';
import { loginInitialValues } from '../../Formik/InitialValues';
import { loginValidationSchema } from '../../Formik/ValidationSchema';

const Login = () => {
  return (
    <LoginWrapper>
    <h1>Inicia Sesion.</h1>
    <span>Completa los datos para ingresar</span>
    
    
    <Formik
    initialValues={loginInitialValues}
    validationSchema={loginValidationSchema}
    onSubmit={(values)=> {
      console.log(values);
      
    }}>
    
    { ({isSubmitting}) =>
    
    <LoginFormContainer>
    
    
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
    >{isSubmitting ? 'Inicio de Sesion exitoso' : 'Iniciar Sesion'}</Submit>
    
    
    </LoginFormContainer>
    
    }
    
    </Formik>
    
    <NoTengoCuenta to='/register'>No estas Registrado? Registrate Aquí.</NoTengoCuenta>
    
    
       </LoginWrapper>
  )
}

export default Login
