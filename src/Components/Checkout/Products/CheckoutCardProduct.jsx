import React from 'react'
import { CheckoutCardContainer, ImgTitleContainer, PriceContainer, Quantity, QuantityPriceContainer } from './CardStyled'

const CheckoutCardProduct = ({ img, price, name, quantity }) => {


    return (
        <CheckoutCardContainer>

            <ImgTitleContainer>

                <img src={img} alt="producto" />
                <h2>{name}</h2>

            </ImgTitleContainer>

            <QuantityPriceContainer>

                <PriceContainer>Price: {price}</PriceContainer>
                <Quantity><span>{quantity}</span></Quantity>

            </QuantityPriceContainer>



        </CheckoutCardContainer>
    )
}

export default CheckoutCardProduct
