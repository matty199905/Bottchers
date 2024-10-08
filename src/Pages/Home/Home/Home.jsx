import React from 'react'
import { HeroContainer, HomeWrapper, ProductsLink, TitleContainer } from './HomeStyled'
import HeroImg from '../../../../src/img/Hero.png'


const Home = () => {
  return (

<HomeWrapper>


<HeroContainer style={{backgroundImage: `url(${HeroImg})`}}>  
 
<TitleContainer>
  <h1>Viví el Confort que siempre soñaste.</h1>
  <ProductsLink to='/products'><span>Nuestros Productos</span></ProductsLink>
</TitleContainer>

</HeroContainer>


</HomeWrapper>

  )
}

export default Home
