import React from 'react'
import { CardsWrapperStyled, EnvioStyled, HrStyled, PriceContainerStyled, PriceTotalStyled, ProductosContainerStyled, ProductsTitleStyled, SubtotalStyled, TotalStyled } from './ProductsCheckoutStyled'
import { useSelector } from 'react-redux'
import CheckoutCardProduct from './CheckoutCardProduct'
import { formatPrice } from '../../../Utils/formatPrice'

const ProductsCheckout = () => {


  const {cartProducts} = useSelector(state => state.cart)

  const { shippingCost } = useSelector(state => state.cart)


  const totalPrice = cartProducts.map((item) => item.quantity * item.price).reduce((acc, cur) => { return acc + cur }, 0)


  return (
    <ProductosContainerStyled>

    <ProductsTitleStyled>Tu Pedido</ProductsTitleStyled>


    <CardsWrapperStyled>

{
  cartProducts.map((item)=>{return <CheckoutCardProduct {...item} key={item.id}/>})
}

    </CardsWrapperStyled>


    <PriceContainerStyled>

      <SubtotalStyled>
        <p>Subtotal</p>
        <span>{formatPrice(totalPrice)}</span>
      </SubtotalStyled>

      <EnvioStyled>
        <p>Envío:</p>
        <span>{formatPrice(shippingCost)}</span>
      </EnvioStyled>

      <HrStyled />
      
      <TotalStyled>
        <p>Total:</p>
        <PriceTotalStyled>{formatPrice(totalPrice + shippingCost)}</PriceTotalStyled>
      </TotalStyled>

    </PriceContainerStyled>

  </ProductosContainerStyled>
  )
}

export default ProductsCheckout
