import React from 'react'
import { useParams } from 'react-router-dom'
import { CuotasContainer, Price, PriceOFF, ProductCardContainer, ProductDetailsContainer, ProductImgContainer, ProductWrapper } from './ProductoDinamicoStyled'
import IMG from '../../img/LivingPage.png'
import Visa from '../../img/Visa.png'
import Button from '../../UI/Button/Button'


const ProductoDinamico = () => {

    useParams()

    return (
        <ProductWrapper>

            <ProductCardContainer>

                <ProductImgContainer style={{ backgroundImage: `url(${IMG})` }} />

                <ProductDetailsContainer>

                    <h1>Titulo del producto</h1>
                    <h2>Descripcion del producto</h2>

<Price>
<p>Precio:</p>
<span>$20,000</span>
</Price>

<PriceOFF>
    <p>Abonando con Efectivo <span className='off'>20% OFF :</span></p>
    <span className='cross'>$20,000</span>
    <span className='orange'>$16,000</span>
    <span></span>
</PriceOFF>
                   

<CuotasContainer>
    <span>12 Cuotas sin interés abonando con</span>
    <img src={Visa} alt="LogoVisa" />
</CuotasContainer>

<Button ProductoDinamico={true}>
    Agregar al Carrito
</Button>
                </ProductDetailsContainer>



            </ProductCardContainer>




        </ProductWrapper>

    )
}

export default ProductoDinamico
