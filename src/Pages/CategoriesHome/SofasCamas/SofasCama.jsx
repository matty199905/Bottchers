import React from 'react'
import { SofasCamaWrapper } from './SofasCamaStyled'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import SofasCamaImg from '../../../img/sofacamaPage.jpg'
import ProductsContainer from '../../../Components/Products/ProductsWrapper/ProductsContainer'

const SofasCama = () => {
  return (
<SofasCamaWrapper>

<IntroPageContainer
background={SofasCamaImg}
title={'Sofás Cama'}
/>

 <ProductsContainer
 hideFilters='true'/>

</SofasCamaWrapper>
  )
}

export default SofasCama
