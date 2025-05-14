import React from 'react'
import { MesasExtensiblesWrapper } from './MesasExtensiblesStyled'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import MesasExtensiblesImg from '../../../img/Mesaextensible.jpg'
import ProductsWrapper from '../../../Components/Products/ProductsWrapper/ProductsWrapper'



const MesasExtensibles: React.FC = () => {
  
  return (
<MesasExtensiblesWrapper>

<IntroPageContainer
background={MesasExtensiblesImg}
title={'Mesas Extensibles'}
/>

<ProductsWrapper
      hideFilters={true}
      page="mesas extensibles"/>

</MesasExtensiblesWrapper>
  )
}

export default MesasExtensibles
