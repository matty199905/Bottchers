import React from 'react'

import { CartHeader, CloseIcon, IconsContainer, ModalCartContainer, PriceContainer, ProductsCartContainer, SubmitsContainer, TitleContainer, TrashIcon } from './ModalCartStyled'

import { IoIosArrowRoundForward } from "react-icons/io";
import Submit from '../../../../UI/Submit/Submit'
import CardCartProduct from './CardCartProduct';
import { GoTrash } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


const ModalCart = () => {


    const navigate = useNavigate()

    return (
        <ModalCartContainer
            initial={{ translateX: 600 }}
            animate={{ translateX: 600 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'>

            <CartHeader>
                <TitleContainer>
                    <h2>Mi Carrito</h2>
                    <span>Total de Productos: 0</span>
                </TitleContainer>

                <IconsContainer>
                    <TrashIcon>
                        <GoTrash />
                    </TrashIcon>

                    <CloseIcon>
                        <IoIosArrowRoundForward />
                    </CloseIcon>
                </IconsContainer>



            </CartHeader>


            <ProductsCartContainer>

                <CardCartProduct />
                <CardCartProduct /><CardCartProduct /><CardCartProduct /><CardCartProduct />



            </ProductsCartContainer>


            <PriceContainer>
                <h3>SubTotal:</h3>
                <span>$0.00</span>
            </PriceContainer>

            <PriceContainer>
                <h3>Total:</h3>
                <span>$0.00</span>
            </PriceContainer>

            <SubmitsContainer>
            
               <Submit onClick={()=>navigate('/checkout')} cart={true}>Iniciar Pedido</Submit>


                <Submit cart={true} deleteAll={true}>Borrar Todo</Submit>

            </SubmitsContainer>
        </ModalCartContainer>
    )
}

export default ModalCart
