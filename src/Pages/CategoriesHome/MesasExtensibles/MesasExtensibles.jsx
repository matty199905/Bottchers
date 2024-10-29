import React from 'react'
import { MesasExtensiblesWrapper } from './MesasExtensiblesStyled'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'

import MesasExtensiblesImg from '../../../img/Mesaextensible.jpg'
import ProductsContainer from '../../../Components/Products/ProductsWrapper/ProductsContainer'
const MesasExtensibles = () => {
  return (
<MesasExtensiblesWrapper>

<IntroPageContainer
background={MesasExtensiblesImg}
title={'Mesas Extensibles'}
/>

 <ProductsContainer
 hideFilters='true'/>

</MesasExtensiblesWrapper>
  )
}

export default MesasExtensibles
