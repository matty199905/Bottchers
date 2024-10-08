import styled from "styled-components"

export const ProductCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 400px;
height: 300px;
img{
    width: 100%;
    height: 70%;
}
h2{
    font-weight:500 ;
   font-size: 17px;
   margin-left: 20px;
}
span{
    font-weight:300 ;
   font-size: 17px;
   margin-left: 20px; 
   margin-top: -5px;
   opacity: .8;
}
`

export const TitlePriceContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content:space-between;
align-items: center;
`

export const Price = styled.div`
   font-weight: 400;
   font-size: 17px;
padding-right: 20px;
`

