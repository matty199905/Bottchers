import React from 'react'
import { LivingWrapper } from './LivingStyled'
import LivingImg from '../../../img/LivingPage.png'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '../../../Components/Products/ProductsWrapper/ProductsWrapper'

const Living: React.FC = () => {
  return (
    <LivingWrapper>


<IntroPageContainer
background={LivingImg}
title={'Productos Living'}
/>

<ProductsWrapper 
      hideFilters={true}
      page='living'/>

    </LivingWrapper>
  )
}

export default Living
