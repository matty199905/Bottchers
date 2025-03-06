import React from 'react'
import { ContactIconStyled, ContactImg, ContactTitleContainer, ContactWrapper, FormContainer, FormikContainer } from './ContactoStyled'
import ContactImage from '../../img/contact-img.jpg'
import { FaArrowDown } from "react-icons/fa";
import { Formik } from 'formik'
import { contactInitialValues } from '../../Formik/InitialValues';
import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';
import { contactValidationSchema } from '../../Formik/ValidationSchema';
import Textarea from '../../UI/Input/Textarea';
import { emailJsApi } from '../../Axios/emailJs';

const Contact = () => {



  return (
    <ContactWrapper>

      <ContactImg style={{ backgroundImage: `url(${ContactImage})` }}>

        <ContactTitleContainer>

          <h1>Contactanos</h1>
          <ContactIconStyled onClick={() => window.scrollTo({ top: 700 })}>
            <FaArrowDown />
          </ContactIconStyled>

        </ContactTitleContainer>

      </ContactImg>


      <FormikContainer>


        <h2>Formulario de Contacto</h2>

        <Formik
          initialValues={contactInitialValues}
          validationSchema={contactValidationSchema}
          onSubmit={(value, {resetForm}) => { 
            emailJsApi(
            value.user_name,
            value.email,
            value.message);
            resetForm()
          }
     }>





          {

            ({ isSubmitting }) =>


              <FormContainer>

                <Input
                  name="user_name"
                  id="nombre"
                  htmlFor="nombre"
                  type="text"
                  placeholder="Ingrese su nombre..."
                  label="Nombre"
                  contact={true} />


                <Input
                  name="email"
                  id="email"
                  htmlFor="email"
                  type="email"
                  placeholder="Ingrese su Email..."
                  label="Email"
                  contact={true} />

                <Textarea
                  name="message"
                  id="message"
                  htmlFor="message"
                  placeholder="Ingrese su asunto..."
                  label="Asunto"
                  asunto={true} />


                <Submit
                  contacto={true}
                >{isSubmitting ? 'Mensaje Enviado' : 'Enviar'}</Submit>

              </FormContainer>
          }



        </Formik>


      </FormikContainer>


    </ContactWrapper >
  )
}

export default Contact





