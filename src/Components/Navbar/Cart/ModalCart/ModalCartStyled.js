import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalCartContainer = styled(motion.div)`
position: fixed;
top: 0px;
right: 0px;
display: flex;
flex-direction: column;
background-color: white;
padding: 0px 40px ;
height: 100vh;
width: 360px;
z-index: 100;
`

export const CartHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
h2{
font-size: 24px;
font-weight: 300;
font-style: oblique;
color: black;
margin-bottom: 5px;
}
span{
    font-size: 14px;
font-weight: 300;
font-style: oblique;
color: grey;
}
`

export const TitleContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

`
export const IconsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`

export const CloseIcon = styled.div`
color: black;
font-size: 30px;
transform: scaleX(1.3) ;
cursor: pointer;
transition: all ease .2s;
&:hover{
    color: orange;
    transition: all ease .2s;
    transform: scale(1.2);
}
`

export const TrashIcon = styled(CloseIcon)`
font-size: ${(props) => (props.card === true ? '20px' : '23px')};
transform: scaleX(1);
position: ${(props) => (props.card === true ? 'absolute' : 'null')};
top: 10px;
right: 10px;
`

export const PriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: -25px;
h3{
    font-size: 17px;
    font-weight: 600;
    font-style: oblique;
    color: black;  
}
span{
    font-size: 19px;
    font-weight: 600;
    color:black;
    
}
`

export const ProductsCartContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 20px;
padding: 10px 20px;
width: 100%;
height: 400px;

margin: 15px 0px 0px -10px;
overflow-y: scroll;
overflow-x: hidden;
&::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

`


export const CardProductStyled = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 120px;
border: 1px solid #b5b5b5;
border-radius: 5px;
background-color: #eaeaea;
padding: 15px;
`

export const ImgTitleCardContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
img{width: 150px;
margin-bottom:-5px;
border-radius:10px;}
h2{color: black;
font-size:16px;
font-weight:500;
font-style: oblique;
margin: 15px 0px 0px 5px ;
}
`

export const HandlerAndPriceCardContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 200px;
height: 100%;
margin: 0px 40px 15px 0px;
`

export const HandlerQuantityContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
margin: 20px -28px 0px 0px;
width: 100%;
span{
    color: black;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;

}
`

export const HandlerIconStyled = styled.button`
border: none;
background-color: transparent;
font-size: 30px;
color: darkblue;
cursor: pointer;
transition: all ease .05s;
&:active{
color: orange;
transform: scale(1.1);
transition: all ease .05s;
}
`

export const Price = styled.div`
font-size: 16px;
font-weight: 500;
font-style: oblique;
background-color: #ffc14d;
color: white;
margin-right: -29px;
padding: 15px;
border-radius: 40px;
`


export const SubmitsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0px;

`
