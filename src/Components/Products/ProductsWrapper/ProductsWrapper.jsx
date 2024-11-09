import React from 'react'
import { ProductsWrapperContainer, MostrarFiltros, ArrowStyled } from './ProductsContainerStyled'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import ProductsContainer from './ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { show } from '../../../Redux/Filters/filtersSlice'
import { showCartToggle } from '../../../Redux/Cart/CartSlice'


const ProductsWrapper = ({ hideFilters, page }) => {

  const dispatch = useDispatch()

  const {showFilters} = useSelector(state => state.filters)

  const {showCart} = useSelector(state => state.cart)


  const closeCartOnCategory = () => {
    if(showCart === true) {
      return dispatch(showCartToggle())
    }
    else {return null}
  }



  return (


    <ProductsWrapperContainer>



      <MostrarFiltros showFilters={showFilters}
        hideFilters={hideFilters}
        onClick={(e) => {
          e.preventDefault();
          dispatch(show());
          closeCartOnCategory();


        }}>
       {showFilters === true ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        <ArrowStyled>
          <MdOutlineArrowForwardIos />
        </ArrowStyled>
      </MostrarFiltros>




      <ProductsContainer page={page} />




    </ProductsWrapperContainer>
  )
}

export default ProductsWrapper
