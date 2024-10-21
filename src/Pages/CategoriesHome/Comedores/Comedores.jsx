import React from 'react'
import { ComedoresWrapper } from './ComedoresStyled'

import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ComedoresPageImg from '../../../img/comedoresPage.jpeg'


const Comedores = () => {
  return (
<ComedoresWrapper>


<IntroPageContainer
background={ComedoresPageImg}
title={'Comedores'}
/>



</ComedoresWrapper>
  )
}

export default Comedores
