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
justify-content: flex-start;
align-items: center;
align-self: flex-start ;
height: 50px;
width: 100vw;
gap: 20px;
color: ${(props)=>(props.showFilters === true ? 'orange' : 'black')};
margin: 20px 0px 0px 50px;
background-color: whitesmoke;
border: none;
font-size: 14px;
letter-spacing: 0.6px;
font-weight: 600;
cursor: pointer;
padding-bottom: 10px;
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


export const ProductsContainerStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 60px;
flex-flow: row wrap;
width: 100vw;
height: ${(props)=>(props.showFilters === true ? '100%' : '100%')};
padding: 30px 0 50px 0;
`

export const PagesContainer = styled.div`
display: ${(props)=>(props.hide === true ? 'none' : 'flex')};
justify-content: center;
align-items: center;
gap: 20px;
margin: 40px 0 -40px 0 ;
`


