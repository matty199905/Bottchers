import React from 'react'
import { LivingWrapper } from './LivingStyled'
import LivingImg from '../../../img/LivingPage.png'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ProductsContainer from '../../../Components/Products/ProductsWrapper/ProductsContainer'

const Living = () => {
  return (
    <LivingWrapper>


<IntroPageContainer
background={LivingImg}
title={'Productos Living'}
/>

 <ProductsContainer
 hideFilters='true'/>

    </LivingWrapper>
  )
}

export default Living
