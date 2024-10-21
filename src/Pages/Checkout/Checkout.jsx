import React from 'react'
import { ContainerCheckoutStyled } from './CheckoutStyled'
import CheckoutForm from '../../Components/Checkout/Form/CheckoutForm'
import ProductsCheckout from '../../Components/Checkout/Products/ProductsCheckout'

const Checkout = () => {
  return (
    <ContainerCheckoutStyled>
    <CheckoutForm/>
    <ProductsCheckout/>
  </ContainerCheckoutStyled>
  )
}

export default Checkout
