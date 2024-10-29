import React from 'react'
import { Price, ProductCardContainer, ColumnContainer, TitlePriceContainer } from './ProductCardStyle'

import Button from '../../../UI/Button/Button'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../Utils/formatPrice'





const ProductCard = ({ img, name, price, desc, id }) => {


  const selectedProduct = { img, name, price, desc, id }


  return (
    <ProductCardContainer>
      <img src={img} alt={desc} />


      <TitlePriceContainer>


        <ColumnContainer>
          <h2>{name}</h2>
          <span>{desc}</span>
        </ColumnContainer>

<ColumnContainer>
        <Price>{formatPrice(price)}</Price>
        <Link to={name} state={{selectedProduct}}><Button>Ver Más</Button></Link>
</ColumnContainer>

      </TitlePriceContainer>
    </ProductCardContainer>
  )
}

export default ProductCard
