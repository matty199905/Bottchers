import React from 'react'
import { ErrorMessageStyled, InputContainer, InputStyled, LabelStyled } from './InputStyled'
import { ErrorMessage, Field } from 'formik'

const Input = ({asunto, htmlFor, type, name, placeholder, id, isError, label, register, login }) => {
  return (
 <InputContainer>
 
 <LabelStyled htmlFor={htmlFor} asunto={asunto}>
{label}
 </LabelStyled>
 
 <Field
 as={InputStyled}
 name={name}
 type={type}
 placeholder={placeholder}
 id={id}
 error={isError}
 asunto={asunto}
 register={register}
 login={login}
 />
 
 <ErrorMessage name={name} component={ErrorMessageStyled}/>
 
 </InputContainer>
  )
}

export default Input
