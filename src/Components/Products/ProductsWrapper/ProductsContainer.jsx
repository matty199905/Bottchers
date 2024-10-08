import React from 'react'
import { PagesContainer, AllProductsContainer, ProductsWrapper } from './ProductsContainerStyled'
import ProductCard from '../ProductCard/ProductCard'
import Button from '../../../UI/Button/Button'


const ProductsContainer = () => {
  return (


 <AllProductsContainer>

  <ProductsWrapper>
    
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>

</ProductsWrapper>

<PagesContainer>
<Button page='true'>1</Button>
<Button page='true'>2</Button>
</PagesContainer>
  

  </AllProductsContainer>
  )
}

export default ProductsContainer
