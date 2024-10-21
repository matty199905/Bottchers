import React from 'react'
import { MesasExtensiblesWrapper } from './MesasExtensiblesStyled'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'

import MesasExtensiblesImg from '../../../img/Mesaextensible.jpg'

const MesasExtensibles = () => {
  return (
<MesasExtensiblesWrapper>

<IntroPageContainer
background={MesasExtensiblesImg}
title={'Mesas Extensibles'}
/>



</MesasExtensiblesWrapper>
  )
}

export default MesasExtensibles
