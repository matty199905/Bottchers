import React from 'react'
import { ComedoresWrapper } from './ComedoresStyled'

import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ComedoresPageImg from '../../../img/comedoresPage.jpeg'
 import ProductsContainer from '../../../Components/Products/ProductsWrapper/ProductsContainer'

const Comedores = () => {
  return (
<ComedoresWrapper>


<IntroPageContainer
background={ComedoresPageImg}
title={'Comedores'}
/>

 <ProductsContainer
 hideFilters='true'/>

</ComedoresWrapper>
  )
}

export default Comedores
