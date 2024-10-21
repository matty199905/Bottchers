import React from 'react'
import { ErrorMessageStyled, InputContainer, LabelStyled, TextTareaStyled } from './InputStyled'
import { ErrorMessage, Field } from 'formik'

const Textarea = ({htmlFor, name, placeholder, id, isError, label, asunto }) => {
  return (
    <InputContainer>
 
    <LabelStyled htmlFor={htmlFor}
    asunto={asunto}>
   {label}
    </LabelStyled>
    
    <Field
    as={TextTareaStyled}
    name={name}
    placeholder={placeholder}
    id={id}
    error={isError}
    />
    
    <ErrorMessage name={name} component={ErrorMessageStyled}/>
    
    </InputContainer>
  )
}

export default Textarea
