import React from 'react'
import { ProductsWrapperContainer, MostrarFiltros, ArrowStyled, Separator } from './ProductsContainerStyled'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import ProductsContainer from './ProductsContainer'
import { useDispatch } from 'react-redux'
import { show } from '../../../Redux/Filters/filtersSlice'


const ProductsWrapper = ({ hideFilters, page }) => {

const dispatch = useDispatch()

  return (


    <ProductsWrapperContainer>

      

<MostrarFiltros
  hideFilters={hideFilters}
  onClick={(e)=> {e.preventDefault();
   return dispatch(show())
   
    
  }}>
  Mostrar Filtros
  <ArrowStyled>
    <MdOutlineArrowForwardIos />
  </ArrowStyled>
</MostrarFiltros>



      <Separator
        hideFilters={hideFilters} />


      <ProductsContainer page={page}/>




    </ProductsWrapperContainer>
  )
}

export default ProductsWrapper
