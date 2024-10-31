import React from 'react'
import { SofasCamaWrapper } from './SofasCamaStyled'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import SofasCamaImg from '../../../img/sofacamaPage.jpg'
import ProductsWrapper from '../../../Components/Products/ProductsWrapper/ProductsWrapper'

const SofasCama = () => {
  return (
<SofasCamaWrapper>

<IntroPageContainer
background={SofasCamaImg}
title={'Sofás Cama'}
/>


<ProductsWrapper 
      hideFilters='true'
      page='sofa cama'/>


</SofasCamaWrapper>
  )
}

export default SofasCama
