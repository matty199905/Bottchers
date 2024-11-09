import React from 'react'
import { ComedoresWrapper } from './ComedoresStyled'

import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ComedoresPageImg from '../../../img/comedoresPage.jpeg'

import ProductsWrapper from '../../../Components/Products/ProductsWrapper/ProductsWrapper'

const Comedores = () => {
  return (
<ComedoresWrapper>


<IntroPageContainer
background={ComedoresPageImg}
title={'Comedores'}
/>

<ProductsWrapper
      hideFilters='true'
      page='comedores'/>

</ComedoresWrapper>
  )
}

export default Comedores
