import React from 'react'
import { CamasMultiposicionWrapper } from './MultiposicionStyled'

import MultiposicionPageImg from '../../../img/MultiposicionPage.jpg'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '../../../Components/Products/ProductsWrapper/ProductsWrapper'





const Multiposicion = () => {
  return (
    <CamasMultiposicionWrapper>


      <IntroPageContainer
        background={MultiposicionPageImg}
        title={'Camas Multiposicion'}
      />

      <ProductsWrapper 
      hideFilters='true'
      page='camas multiposiciones'/>


    </CamasMultiposicionWrapper>
  )
}

export default Multiposicion
