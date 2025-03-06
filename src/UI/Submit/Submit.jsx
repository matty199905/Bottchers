import React from 'react'
import { BtnContainer } from './SubmitStyled'

const Submit = ({children, register, login, contacto, cart, onClick, disabled}) => {
  return (
 <BtnContainer type='submit'
 register={register}
 login={login}
 contacto={contacto}
 cart={cart}
 onClick={onClick}
 disabled={disabled}>

 {children}

 </BtnContainer>
  )
}

export default Submit
