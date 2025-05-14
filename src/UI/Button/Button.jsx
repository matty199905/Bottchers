import React from 'react'
import { ButtonStyled } from './ButtonStyled'

const Button = ({children, page, ProductoDinamico, disabled,
  onClick = (e)=> e.preventDefault}) => {
  return (
 <ButtonStyled 
 
 page={page}
 ProductoDinamico={ProductoDinamico}
 disabled={disabled}
 onClick={onClick}
 >
    {children}
 </ButtonStyled>
  )
}

export default Button
