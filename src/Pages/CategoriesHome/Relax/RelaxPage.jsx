import React from 'react'
import { RelaxWrapper } from './RelaxPageStyled'
import RelaxIntroImg from '../../../img/RelaxIntroPage.jpg'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'


const RelaxPage = () => {

  return (
 <RelaxWrapper>

<IntroPageContainer
background={RelaxIntroImg}
title={'Productos Relax'}
/>


 </RelaxWrapper>
  )
}

export default RelaxPage
