import React from 'react'
import { ContactIconStyled, ContactImg, ContactTitleContainer, ContactWrapper, FormContainer, FormikContainer } from './ContactoStyled'
import ContactImage from '../../img/contact-img.jpg'
import { FaArrowDown } from "react-icons/fa";
import { Formik } from 'formik'
import { contactInitialValues } from '../../Formik/InitialValues';
import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';
import { contactValidationSchema } from '../../Formik/ValidationSchema';



const Contact = () => {
  return (
    <ContactWrapper>

      <ContactImg style={{ backgroundImage: `url(${ContactImage})` }}>

        <ContactTitleContainer>

          <h1>Contactanos</h1>
          <ContactIconStyled>
            <FaArrowDown />
          </ContactIconStyled>

        </ContactTitleContainer>

      </ContactImg>


      <FormikContainer>


        <h2>Formulario de Contacto</h2>

        <Formik
          initialValues={contactInitialValues}
          validationSchema={contactValidationSchema}
          onSubmit={(values) => {
            console.log(values)
          }}>


          {({ isSubmitting }) =>


            <FormContainer>

              <Input
                name="name"
                id="nombre"
                htmlFor="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                label="Nombre" />

              <Input
                name="surname"
                id="apellido"
                htmlFor="apellido"
                type="text"
                placeholder="Ingrese su apellido"
                label="Apellido" />

              <Input
                name="email"
                id="email"
                htmlFor="email"
                type="email"
                placeholder="Ingrese su Email"
                label="Email" />

              <Input
                name="asunto"
                id="asunto"
                htmlFor="asunto"
                type="text"
                placeholder="Ingrese su asunto"
                label="Asunto"
                asunto="true" />


              <Submit contacto={true}
                enviado={isSubmitting ? true : false}
              >{isSubmitting ? 'Mensaje Enviado' : 'Enviar'}</Submit>

            </FormContainer>
          }



        </Formik>


      </FormikContainer>


    </ContactWrapper >
  )
}

export default Contact





