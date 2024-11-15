import React from 'react'
import { Body, LoginWrapper, NoTengoCuenta } from './LoginStyled';
import { Formik } from 'formik';
import Input from '../../UI/Input/Input';
import { LoginFormContainer } from './LoginStyled';
import Submit from '../../UI/Submit/Submit';
import { loginInitialValues } from '../../Formik/InitialValues';
import { loginValidationSchema } from '../../Formik/ValidationSchema';
import { loginUser } from '../../Axios/axiosUser';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../Redux/User/userSlice'
import Loader from '../../Components/Loader/Loader'


const Login = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()


  return (
    <Body>

      <LoginWrapper>
        <h1>Inicia Sesion.</h1>
        <span>Completa los datos para ingresar</span>


        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values) => {

            const userLoged = await loginUser(values.email, values.password);

            console.log(userLoged);


            if (userLoged) {
              navigate('/');
              dispatch(setCurrentUser({ ...userLoged.usuario, token: userLoged.token }))
            }

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
    login='true' />

  <Input
    name='password'
    id='contraseña'
    htmlFor='contraseña'
    placeholder='Ingrese su Contraseña aqui...'
    label='Contraseña'
    type='password'
    login='true' />


  <Submit>{isSubmitting ? <Loader/> : 'Iniciar Sesión'}</Submit>


</LoginFormContainer>
}
          

          

        </Formik>

        <NoTengoCuenta to='/register'>No estas Registrado? Registrate Aquí.</NoTengoCuenta>


      </LoginWrapper>

    </Body>
  )
}

export default Login
