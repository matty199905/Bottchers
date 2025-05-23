import React from 'react'
import { SofasCamaWrapper } from './SofasCamaStyled'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import SofasCamaImg from '../../../img/sofacamaPage.jpg'
import ProductsWrapper from '../../../Components/Products/ProductsWrapper/ProductsWrapper'

const SofasCama: React.FC = () => {
  return (
<SofasCamaWrapper>

<IntroPageContainer
background={SofasCamaImg}
title={'Sofás Cama'}
/>


<ProductsWrapper 
      hideFilters={true}
      page='sofas cama'/>


</SofasCamaWrapper>
  )
}

export default SofasCama
