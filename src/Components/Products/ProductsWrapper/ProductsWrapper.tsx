import React from 'react'
import { ProductsWrapperContainer, MostrarFiltros, ArrowStyled, ButtonFiltersContainer } from './ProductsContainerStyled'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import ProductsContainer from './ProductsContainer'
import { useDispatch } from 'react-redux'
import { show } from '../../../Redux/Filters/filtersSlice'
import { showCartToggle } from '../../../Redux/Cart/cartSlice'
import { useSelectorTS } from '../../../Utils/constants'
import { AppDispatch } from '../../../Redux/store'


type ProductsWrapperProps = {
  hideFilters?: boolean,
  page: string,
}



const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ hideFilters, page }) => {

  const { showFilters } = useSelectorTS(state => state.filters)

  const { showCart } = useSelectorTS(state => state.cart)

  const dispatch = useDispatch<AppDispatch>()




  const closeCartOnCategory = () => {
    if (showCart === true) {
      return dispatch(showCartToggle())
    }
    else { return null }
  }



  return (


    <ProductsWrapperContainer>

      <ButtonFiltersContainer>

        <MostrarFiltros
          showFilters={showFilters}
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

      </ButtonFiltersContainer>



      <ProductsContainer page={page} />




    </ProductsWrapperContainer>
  )
}

export default ProductsWrapper
