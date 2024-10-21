import React from 'react'
import { CardProductStyled, HandlerAndPriceCardContainer, HandlerIconStyled, HandlerQuantityContainer, ImgTitleCardContainer, Price, TrashIcon } from './ModalCartStyled'
import ProductoImg from '../../../../img/LivingPage.png'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";

const CardCartProduct = () => {
    return (
        <CardProductStyled>

            <TrashIcon card={true}>
                <GoTrash />
            </TrashIcon>

            <ImgTitleCardContainer>

                <img src={ProductoImg} alt="producto" />
                <h2>Titulo del producto</h2>

            </ImgTitleCardContainer>




            <HandlerAndPriceCardContainer>

                <HandlerQuantityContainer>
                    <HandlerIconStyled><FaCircleMinus /></HandlerIconStyled>
                    <span>0</span>
                    <HandlerIconStyled><FaCirclePlus /></HandlerIconStyled>
                </HandlerQuantityContainer>

                <Price>Price: $20,000</Price>
            </HandlerAndPriceCardContainer>

        </CardProductStyled>
    )
}

export default CardCartProduct
