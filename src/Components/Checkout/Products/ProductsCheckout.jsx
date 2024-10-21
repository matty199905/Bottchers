import React from 'react'
import { CardsWrapperStyled, EnvioStyled, HrStyled, PriceContainerStyled, PriceTotalStyled, ProductosContainerStyled, ProductsTitleStyled, SubtotalStyled, TotalStyled } from './ProductsCheckoutStyled'
import CardCartProduct from '../../Navbar/Cart/ModalCart/CardCartProduct'

const ProductsCheckout = () => {
  return (
    <ProductosContainerStyled>

    <ProductsTitleStyled>Tu Pedido</ProductsTitleStyled>


    <CardsWrapperStyled>

 <CardCartProduct/>
 <CardCartProduct/>
 <CardCartProduct/>

    </CardsWrapperStyled>


    <PriceContainerStyled>

      <SubtotalStyled>
        <p>Subtotal</p>
        <span>$5000</span>
      </SubtotalStyled>

      <EnvioStyled>
        <p>Envío:</p>
        <span>$2000</span>
      </EnvioStyled>

      <HrStyled />
      
      <TotalStyled>
        <p>Total:</p>
        <PriceTotalStyled>$20000</PriceTotalStyled>
      </TotalStyled>

    </PriceContainerStyled>

  </ProductosContainerStyled>
  )
}

export default ProductsCheckout
