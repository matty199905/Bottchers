
import React, { useRef } from 'react';
import { ContactIconStyled, ContactImg, ContactTitleContainer, ContactWrapper, FormContainer, FormikContainer } from './ContactoStyled'
import ContactImage from '../../img/contact-img.jpg'
import { FaArrowDown } from "react-icons/fa";
import { Formik } from 'formik'
import { contactInitialValues } from '../../Formik/InitialValues';
import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';
import { contactValidationSchema } from '../../Formik/ValidationSchema';
import Textarea from '../../UI/Input/Textarea';
import emailjs from '@emailjs/browser';

const Contact = () => {
  

    const form = useRef();
  
    const sendEmail = () => {

  
      emailjs
        .sendForm('service_4nr7uhx', 'contact_form', form.current, {
          publicKey: 'HFL8hxEgVMEM8UKla',
        })
        .then(
          () => {
            alert('Mensaje enviado correctamente!')
          },
          (error) => {
            console.log(error);
          },
        );}
   
  

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
            sendEmail();
            resetForm();
          }
     }>





          {

            ({ isSubmitting }) =>


              <FormContainer ref={form}>

                <Input
                  name="user_name"
                  id="nombre"
                  htmlFor="nombre"
                  type="text"
                  placeholder="Ingrese su nombre..."
                  label="Nombre"
                  contact={true} />


                <Input
                  name="user_email"
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
                  contact={true}
                >{isSubmitting ? 'Mensaje Enviado' : 'Enviar'}</Submit>

              </FormContainer>
          }



        </Formik>


      </FormikContainer>


    </ContactWrapper >
  )
}

export default Contact





