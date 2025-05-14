import React from 'react'
import { CategoriesSection, HeroContainer, HomeWrapper, ProductsLink, TitleContainer } from './HomeStyled'
import HeroImg from '../../../../src/img/Hero.png'
import CategoriesGrid from '../../../Components/Home/CategoriesGrid/CategoriesGrid'



const Home: React.FC = () => {


  return (

<HomeWrapper>



<HeroContainer style={{backgroundImage: `url(${HeroImg})`}}>  
 
<TitleContainer>
  <h1>Viví el Confort que Siempre Soñaste.</h1>
  <ProductsLink to='/products'><span>Nuestros Productos</span></ProductsLink>
</TitleContainer>

</HeroContainer>

<CategoriesSection>
<h2>El Confort que estás buscando.</h2>
<p>Descubrí el producto ideal para vos en nuestras colecciones especialmente diseñadas para que vivas una experiencia única.</p>

<CategoriesGrid/>

</CategoriesSection>
 
 

</HomeWrapper>

  )
}

export default Home
