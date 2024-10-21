import React from 'react'
import { SofasCamaWrapper } from './SofasCamaStyled'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import SofasCamaImg from '../../../img/sofacamaPage.jpg'


const SofasCama = () => {
  return (
<SofasCamaWrapper>

<IntroPageContainer
background={SofasCamaImg}
title={'Sofás Cama'}
/>



</SofasCamaWrapper>
  )
}

export default SofasCama
