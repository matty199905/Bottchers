import styled from "styled-components";


export const CheckoutCardContainer = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 110px;
border-radius: 5px;
background-color: #9a9a9a;
padding: 15px;
`

export const ImgTitleContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
img{width: 150px;
    height: 90px;
margin-bottom:-5px;
border-radius:10px;}
h2{color: black;
font-size:16px;
font-weight:500;
font-style: oblique;
margin: 15px 0px 0px 5px ;
}
`

export const QuantityPriceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`


export const PriceContainer = styled.div`
align-self: last baseline;
font-size: 16px;
font-weight: 500;
font-style: oblique;
background-color: darkblue;
opacity: 0.7;
color: white;
padding: 15px;
border-radius: 5px;
`

export const Quantity = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:  #ffffffef;
border-radius: 50%;
width: 40px;
height: 40px;
span{
    color: black;
    opacity: 0.9;
    font-size: 18px;
    font-weight: 500;
}
`