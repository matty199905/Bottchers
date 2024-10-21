import React from 'react'
import { Price, ProductCardContainer, TitlePriceContainer } from './ProductCardStyle'
import ProductoImg from '../../../img/LivingPage.png'
import Button from '../../../UI/Button/Button'
import { Link } from 'react-router-dom'


const ProductCard = () => {
  return (
    <ProductCardContainer>
        <img src={ProductoImg} alt="Producto" />
        <TitlePriceContainer>
        <h2>Titulo del producto</h2>
        <Price>$2.000.000</Price>
        <span>Descripcion del...</span>

        {/* EN LA LOGICA HACER UN MAP AL PRODUCTSLIST PARA EN EL LINK PODER ACCEDER AL PRODUCT.NAME DEL PRODCUTO SELECCIONADO */}

        <Link to='product'><Button>Ver Más</Button></Link>
        </TitlePriceContainer>
    </ProductCardContainer>
  )
}

export default ProductCard
