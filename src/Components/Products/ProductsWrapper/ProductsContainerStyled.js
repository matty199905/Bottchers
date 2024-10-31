import { motion } from "framer-motion";
import styled from "styled-components";



export const ProductsWrapperContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 520px;
`

export const MostrarFiltros = styled(motion.button)`
display: ${(props)=>(props.hideFilters === 'true' ? 'none' : 'flex')};
justify-content: center;
align-items: center;
align-self: flex-start ;
height: 50px;
width: 200px;
gap: 20px;
color: black;
margin: 20px 0px 0px 0px;
background-color: transparent;
border: none;
font-size: 15px;
letter-spacing: .5px;
font-weight: 600;
cursor: pointer;
padding-bottom: 10px;
transition: all ease .2s;
  &:hover{ 
    color: orange;
    transform: scale(1.05);
    transition: all ease .2s;
  }
`

export const Separator = styled.hr`
display: ${(props)=>(props.hideFilters === 'true' ? 'none' : 'flex')};
width: 97vw;
height: 1px;
background-color: grey;
`

export const ArrowStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 5px 0px 0px -10px;
`


export const ProductsContainerStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 60px;
flex-flow: row wrap;
width: 100vw;
height: auto;
padding: 50px 0px;
`

export const PagesContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin: 40px 0 -40px 0 ;
`


