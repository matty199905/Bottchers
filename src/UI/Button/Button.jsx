import React from 'react'
import { ButtonStyled } from './ButtonStyled'

const Button = ({children, page, ProductoDinamico}) => {
  return (
 <ButtonStyled 
 page={page}
 ProductoDinamico={ProductoDinamico}>
    {children}
 </ButtonStyled>
  )
}

export default Button
