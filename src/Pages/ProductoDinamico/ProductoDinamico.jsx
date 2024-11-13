import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CuotasContainer, Price, PriceOFF, ProductCardContainer, ProductDetailsContainer, ProductImgContainer, ProductWrapper } from './ProductoDinamicoStyled'
import Visa from '../../img/Visa.png'
import Button from '../../UI/Button/Button'
import { formatPrice } from '../../Utils/formatPrice'
import { useDispatch } from 'react-redux'
import { addToCart, showCartToggle } from '../../Redux/Cart/CartSlice'



const ProductoDinamico = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

 const{product} = useParams()
    
 const location = useLocation()
 
 const productData = location.state?.selectedProduct

 const descuento = productData.price * 0.20

console.log(productData);



    return (
        <ProductWrapper>

            <ProductCardContainer>

                <ProductImgContainer style={{ backgroundImage:`url(${productData.img})`}} />

                <ProductDetailsContainer>

                    <h1>{product}</h1>
                    <h2>{productData.desc}</h2>

                    <Price>
                        <p>Precio:</p>
                        <span>{formatPrice(productData.price)}</span>
                    </Price>

                    <PriceOFF>
                        <p>Abonando en Efectivo <span className='off'>20% OFF :</span></p>
                        <span className='cross'>{formatPrice(productData.price)}</span>
                        <span className='orange'>{formatPrice(productData.price - descuento)}</span>
                        <span></span>
                    </PriceOFF>


                    <CuotasContainer>
                        <span>12 Cuotas sin interés abonando con</span>
                        <img src={Visa} alt="LogoVisa" />
                    </CuotasContainer>

                    <Button ProductoDinamico={true} onClick={()=>{ {
                        if(window.confirm('¿Desea agregar este producto al carrito?')){
                        dispatch(addToCart(productData));
                        navigate('/products');
                        dispatch(showCartToggle())
                    }
                    }

                    }
                    }>
                        Agregar al Carrito
                    </Button>
                </ProductDetailsContainer>



            </ProductCardContainer>




        </ProductWrapper>

    )
}

export default ProductoDinamico
