import React from 'react'
import { ButtonStyled } from './ButtonStyled'

const Button = ({children, page}) => {
  return (
 <ButtonStyled 
 page={page}>
    {children}
 </ButtonStyled>
  )
}

export default Button
