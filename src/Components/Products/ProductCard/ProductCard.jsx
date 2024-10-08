import React from 'react'
import { Price, ProductCardContainer, TitlePriceContainer } from './ProductCardStyle'
import ProductoImg from '../../../img/Hero2.png'
import Button from '../../../UI/Button/Button'


const ProductCard = () => {
  return (
    <ProductCardContainer>
        <img src={ProductoImg} alt="Producto" />
        <TitlePriceContainer>
        <h2>Titulo del producto</h2>
        <Price>$2.000.000</Price>
        <span>Descripcion del...</span>
        <Button>Añadir al carrito</Button>
        </TitlePriceContainer>
    </ProductCardContainer>
  )
}

export default ProductCard
