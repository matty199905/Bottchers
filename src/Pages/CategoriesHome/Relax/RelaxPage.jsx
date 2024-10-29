import React from 'react'
import { RelaxWrapper } from './RelaxPageStyled'
import RelaxIntroImg from '../../../img/RelaxIntroPage.jpg'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ProductsContainer from '../../../Components/Products/ProductsWrapper/ProductsContainer'

const RelaxPage = () => {

  return (
 <RelaxWrapper>

<IntroPageContainer
background={RelaxIntroImg}
title={'Productos Relax'}
/>
 <ProductsContainer
 hideFilters='true'/>

 </RelaxWrapper>
  )
}

export default RelaxPage
