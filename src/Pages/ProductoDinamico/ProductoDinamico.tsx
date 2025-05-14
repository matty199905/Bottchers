import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CuotasContainer, Price, PriceOFF, PricesOffContainer, ProductCardContainer, ProductDetailsContainer, ProductImgContainer, ProductWrapper } from './ProductoDinamicoStyled'
import Visa from '../../img/Visa.png'
import Button from '../../UI/Button/Button'
import { formatPrice } from '../../Utils/formatPrice'
import { useDispatch } from 'react-redux'
import { addToCart, showCartToggle } from '../../Redux/Cart/cartSlice'
import { AppDispatch } from '../../Redux/store'
import { ProductCardProps } from '../../Components/Products/ProductCard/ProductCard'



const ProductoDinamico: React.FC = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()

    const { product } = useParams()

    const location = useLocation()

    const productData = location?.state?.selectedProduct as ProductCardProps

    const descuento = productData.price * 0.20



    return (
        <ProductWrapper>

            <ProductCardContainer>

                <ProductImgContainer style={{ backgroundImage: `url(${productData.img})` }} />

                <ProductDetailsContainer>

                    <h1>{product}</h1>
                    <h2>{productData.desc}</h2>

                    <Price>
                        <p>Precio:</p>
                        <span>{formatPrice(productData.price)}</span>
                    </Price>

                    <PriceOFF>
                        <p>Abonando en Efectivo <span className='off'>20% OFF :</span></p>

                        <PricesOffContainer>
                            <span className='cross'>{formatPrice(productData.price)}</span>
                            <span className='orange'>{formatPrice(productData.price - descuento)}</span>
                            <span></span>
                        </PricesOffContainer>
                    </PriceOFF>


                    <CuotasContainer>
                        <span>12 Cuotas sin interés abonando con</span>
                        <img src={Visa} alt="LogoVisa" />
                    </CuotasContainer>

                    <Button productoDinamico={true} onClick={() => 
                        {
                            if (window.confirm('¿Desea agregar este producto al carrito?')) {
                                dispatch(addToCart(productData));
                                navigate('/products');
                                dispatch(showCartToggle())
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
