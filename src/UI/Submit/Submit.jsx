import React from 'react'
import { BtnContainer } from './SubmitStyled'

const Submit = ({children, enviado, register, login, contacto}) => {
  return (
 <BtnContainer type='submit'
 enviado={enviado}
 register={register}
 login={login}
 contacto={contacto}>
 {children}
 </BtnContainer>
  )
}

export default Submit
