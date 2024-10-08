import styled from "styled-components";
import { motion } from 'framer-motion';

export const ProductsWrapperPage = styled.main`
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: 100%;

`

export const ImgContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
`

export const ProductsTitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
margin-top: 150px;
color: white;
h1{
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
}
span{
    width: 90%;
    margin-top: 30px;
    text-align: center;
    font-size: 17px;
    font-weight: 500;

}
`

export const DoceCuotasSinInteresContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
text-align: center;
height: 120px;
gap: 20px;
`

export const NumeroCuotas = styled.div`
margin-left:40px;
font-size: 130px;
font-weight: 600;
font-style: oblique;
transform: scaleY(1.2);
`

export const CuotasSinInteresContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: left;
font-size: 30px;
font-weight: 400;
font-style: oblique;
gap: 10px;
img{
    width: 100px;
    align-self: flex-start;
}
`

export const MostarFiltros = styled(motion.button)`
display: flex;
justify-content: flex-start;
align-items: center;
height: 50px;
width: 95vw;
gap: 20px;
color: white;
margin: 20px 0px 0px 0px;
    background-color: transparent;
    border: none;
    letter-spacing: 1px;
    font-style: oblique;
    font-weight: 500;
    cursor: pointer;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
    transition: all ease .2s;
  &:hover{ 
    color: orange;
    transition: all ease .2s;
  }
`

export const ArrowStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 5px 0px 0px -10px;
`






