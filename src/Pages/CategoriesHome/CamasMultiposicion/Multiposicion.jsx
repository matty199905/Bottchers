import React from 'react'
import { CamasMultiposicionWrapper } from './MultiposicionStyled'

import MultiposicionPageImg from '../../../img/MultiposicionPage.jpg'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'




const Multiposicion = () => {
  return (
<CamasMultiposicionWrapper>


<IntroPageContainer
background={MultiposicionPageImg}
title={'Camas Multiposicion'}
/>




</CamasMultiposicionWrapper>
  )
}

export default Multiposicion
