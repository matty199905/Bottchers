import React from 'react'
import { CheckoutCardContainer, ImgTitleContainer, PriceContainer, Quantity, QuantityPriceContainer } from './CardStyled'

const CheckoutCardProduct = ({ img, price, title, quantity, orderOverview }) => {



    return (
        <CheckoutCardContainer orderOverview={orderOverview}>

            <ImgTitleContainer>

                <img src={img} alt="producto" />
                <h2>{title}</h2>

            </ImgTitleContainer>

            <QuantityPriceContainer>

                <PriceContainer>Price: {price}</PriceContainer>
                <Quantity><span>{quantity}</span></Quantity>

            </QuantityPriceContainer>



        </CheckoutCardContainer>
    )
}

export default CheckoutCardProduct
