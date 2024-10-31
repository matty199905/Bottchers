import React from 'react'
import { ActiveFiltersContainer, FilterContainer, FiltersContainer } from './ModalCategoriesStyled'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

const ModalCategories = () => {

    const { showFilters } = useSelector(state => state.filters)


  return (
 <AnimatePresence>
{ showFilters &&


    <FiltersContainer
    initial={{ translateX: -600 }}
    animate={{ translateX: 0}}
    exit={{ translateX: -600}}
    transition={{ type: 'spring', damping: 20 }}
    key='cart-modal'>


      <ActiveFiltersContainer>


      </ActiveFiltersContainer>


      <FilterContainer>
          <h3>Respaldo</h3>
          <ul>
              <li>- Alto</li>
              <li>- Tapizado</li>
          </ul>
      </FilterContainer>

      <FilterContainer>
          <h3>Entrega</h3>
          <ul>
              <li>- 35 Dias</li>
              <li>- 40 Dias</li>
              <li>- Entrega inmediata</li>
          </ul>
      </FilterContainer>

      <FilterContainer>
          <h3>Opciones de Tapizado</h3>
          <ul>
              <li>- Cuero</li>
              <li>- EcoCuero</li>
              <li>- Tela</li>
          </ul>
      </FilterContainer>

      <FilterContainer>
          <h3>Plazas</h3>
          <ul>
              <li>- 2 plazas</li>
          </ul>
      </FilterContainer>

      <FilterContainer>
          <h3>Tamaño</h3>
          <ul>
              <li>- 2 Cuerpos</li>
              <li>- 2 Cuerpos modulares</li>
              <li>- 3 Cuerpos</li>
              <li>- 3 Cuerpos modulares</li>
              <li>- 4 cuerpos modulares</li>
              <li>- Esquinero</li>
          </ul>
      </FilterContainer>


  </FiltersContainer>

 }
   </AnimatePresence>

  )
}

export default ModalCategories
