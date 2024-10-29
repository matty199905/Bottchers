import React from 'react'

import { CartHeader, CloseIcon, IconsContainer, ModalCartContainer, PriceContainer, ProductInfoContainer, ProductsCartContainer, SubmitsContainer, TitleContainer, TrashIcon } from './ModalCartStyled'

import { IoIosArrowRoundForward } from "react-icons/io";
import Submit from '../../../../UI/Submit/Submit'
import CardCartProduct from './CardCartProduct';
import { GoTrash } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { removeAllFromCart, showCartToggle } from '../../../../Redux/Cart/CartSlice';
import { formatPrice } from '../../../../Utils/formatPrice'
import { AnimatePresence } from 'framer-motion';

const ModalCart = () => {

    const dispatch = useDispatch()

    const { cartProducts } = useSelector(state => state.cart)

    const { shippingCost } = useSelector(state => state.cart)

    const { showCart } = useSelector(state => state.cart)

    const navigate = useNavigate()




    const totalPrice = cartProducts.map((item) => item.quantity * item.price).reduce((acc, cur) => { return acc + cur }, 0)

    





    return (

        <AnimatePresence>

            { showCart && 

                <ModalCartContainer
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ type: 'spring', damping: 30}}
                    key='cart-modal'>

                    <CartHeader>
                        <TitleContainer>
                            <h2>Mi Carrito</h2>
                            <span>Total de Productos: 0</span>
                        </TitleContainer>

                        <IconsContainer >
                            <TrashIcon onClick={() => { if (window.confirm('¿Desea vaciar el carrito?') === true) { return dispatch(removeAllFromCart()) } }}>
                                <GoTrash />
                            </TrashIcon>

                            <CloseIcon onClick={() => dispatch(showCartToggle())}>
                                <IoIosArrowRoundForward />
                            </CloseIcon>
                        </IconsContainer>



                    </CartHeader>


                    <ProductsCartContainer>

                        {
                            !cartProducts.length ? <p className='empty-cart'>El carrito está vacío</p> : cartProducts.map((item) => { return <CardCartProduct {...item} /> })
                        }



                    </ProductsCartContainer>


                    <ProductInfoContainer>

                        <PriceContainer>
                            <h3>Envio:</h3>
                            <span>{formatPrice(shippingCost)}</span>
                        </PriceContainer>

                        <PriceContainer>
                            <h3>SubTotal:</h3>
                            <span>{formatPrice(totalPrice)}</span>
                        </PriceContainer>

                        <PriceContainer>
                            <h3>Total:</h3>
                            <span>{formatPrice(totalPrice + shippingCost)}</span>
                        </PriceContainer>

                    </ProductInfoContainer>


                    <SubmitsContainer>

                        <Submit onClick={() => navigate('/checkout')} cart={true} disabled={!cartProducts.length}>Iniciar Pedido</Submit>


                    </SubmitsContainer>
                </ModalCartContainer>


            }
            </AnimatePresence>
    )
}

export default ModalCart
