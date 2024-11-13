import styled from "styled-components";

export const ProductWrapper = styled.main`
display: flex;
justify-content: center;
align-items: flex-start;
width: 100vw;
height: 1300px;
background-color: #292929; ;
`

export const ProductCardContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin: 110px 0px;
width: 90%;
height: 80vh;
background: linear-gradient(to bottom,#c3c3c3 , #dadada, #efefef, white);
box-shadow: 1px 2px 20px black;
`

export const ProductImgContainer = styled.div`
position: absolute;
top: 21px;
left: 30px;
width: 55%;
height: 91%;
background-size: cover;  
background-position: center;
` 

export const ProductDetailsContainer = styled.div`
position: absolute;
top: 0px;
right: 0px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 33%;
height: 88%;
padding: 30px 50px;
border-left: 2px solid #a3a3a3;
h1{
    font-size: 33px;
    font-weight: 600;
    margin-bottom: -10px;
}
h2{
    font-size:20px;
    font-weight: 400;
    opacity: .5;
}
`
export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.div`
  font-size: 19px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
 margin: 30px 0 -30px 0;
  span{
   
    font-weight: 700;
    color: orange;
  }
`;

export const PriceOFF = styled(Price)`
.off{
    font-weight: 700;
    font-style: oblique;
    opacity: 1;
    color: black;
}
.cross{
    text-decoration: line-through 2.7px red;
    opacity: 0.5;
}
.orange{
    font-weight: 700;
    font-size: 20px;
    color: black;
    opacity: 1;

}
`

export const CuotasContainer = styled.div`
display: flex;
justify-content: flex-start;
align-self: flex-end;
margin-top: 80px;
span{
    font-size: 18px;
    font-weight: 500;
    font-style: oblique;
    opacity: 0.5;
}
img{
    width: 80px;
    margin: 0px 0 0 25px;
}
`

