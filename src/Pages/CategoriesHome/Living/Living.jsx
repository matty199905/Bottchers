import React from 'react'
import { LivingWrapper } from './LivingStyled'
import LivingImg from '../../../img/LivingPage.png'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'


const Living = () => {
  return (
    <LivingWrapper>


<IntroPageContainer
background={LivingImg}
title={'Productos Living'}
/>



    </LivingWrapper>
  )
}

export default Living
