import React, { useState } from 'react'
import { PagesContainer, AllProductsContainer, ProductsWrapper, MostrarFiltros, ArrowStyled, Separator } from './ProductsContainerStyled'
import ProductCard from '../ProductCard/ProductCard'
import Button from '../../../UI/Button/Button'
import ModalCategories from '../ModalCategories/ModalCategories'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useSelector } from 'react-redux'


const ProductsContainer = ({ hideFilters }) => {

  const Initial_Limit = 8

  const [limit, setLimit] = useState(Initial_Limit)

  const { productos } = useSelector(state => state.productos)

  const { totalProducts } = useSelector(state => state.productos)

  return (


    <ProductsWrapper>

      <MostrarFiltros
        hideFilters={hideFilters}>
        Mostrar Filtros
        <ArrowStyled>
          <MdOutlineArrowForwardIos />
        </ArrowStyled>
      </MostrarFiltros>

      <Separator
        hideFilters={hideFilters} />

      <AllProductsContainer>

        <ModalCategories />
        {



          Object.entries(productos).map(([, arrayDeArrays]) => { return arrayDeArrays.map((item) => { if (limit >= item.id) { return <ProductCard {...item} key={item.id} /> } else { return null } }) })



        }

      </AllProductsContainer>

      <PagesContainer>

        <Button
          onClick={() => setLimit(prevLimit => prevLimit - Initial_Limit)}
          disabled={Initial_Limit >= limit}
          page='true'>
          Ver Menos</Button>


        <Button onClick={() => setLimit(prevLimit => prevLimit + Initial_Limit)}
          page='true'
          disabled={totalProducts <= limit}
        >Ver Más</Button>


      </PagesContainer>


    </ProductsWrapper>
  )
}

export default ProductsContainer
