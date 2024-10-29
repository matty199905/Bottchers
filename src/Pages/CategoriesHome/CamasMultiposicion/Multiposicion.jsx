import React from 'react'
import { CamasMultiposicionWrapper } from './MultiposicionStyled'

import MultiposicionPageImg from '../../../img/MultiposicionPage.jpg'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ProductsContainer from '../../../Components/Products/ProductsWrapper/ProductsContainer'





const Multiposicion = () => {
  return (
    <CamasMultiposicionWrapper>


      <IntroPageContainer
        background={MultiposicionPageImg}
        title={'Camas Multiposicion'}
      />

      <ProductsContainer
      hideFilters='true'/>


    </CamasMultiposicionWrapper>
  )
}

export default Multiposicion
