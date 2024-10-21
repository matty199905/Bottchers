import React from 'react'
import { PagesContainer, AllProductsContainer, ProductsWrapper, MostrarFiltros, ArrowStyled, Separator } from './ProductsContainerStyled'
import ProductCard from '../ProductCard/ProductCard'
import Button from '../../../UI/Button/Button'
import ModalCategories from '../ModalCategories/ModalCategories'
import { MdOutlineArrowForwardIos } from 'react-icons/md'


const ProductsContainer = () => {
  return (


    <ProductsWrapper>

      <MostrarFiltros>
        Mostrar Filtros
        <ArrowStyled>
          <MdOutlineArrowForwardIos />
        </ArrowStyled>
      </MostrarFiltros>

      <Separator />

      <AllProductsContainer>

        <ModalCategories />

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </AllProductsContainer>

      <PagesContainer>
        <Button page='true'>1</Button>
        <Button page='true'>2</Button>
      </PagesContainer>


    </ProductsWrapper>
  )
}

export default ProductsContainer
