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
export const ButtonFiltersContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 70px;
width: 100vw;
`

export const MostrarFiltros = styled(motion.button)`
display: ${(props)=>(props.hideFilters === 'true' ? 'none' : 'flex')};
justify-content:center;
align-items: center;
gap: 20px;
color: ${(props)=>(props.showFilters === true ? 'orange' : 'black')};
margin: 20px 0px 0px 10px;
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
margin: 0px 0px 0px -10px;
`


export const ProductsContainerStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 60px;
flex-flow: row wrap;
width: 100vw;
padding: 30px 0 50px 0;
@media (max-width: 720px) {
gap: 35px;
}
`

export const PagesContainer = styled.div`
display: ${(props)=>(props.hide === true ? 'none' : 'flex')};
justify-content: center;
align-items: center;
gap: 20px;
margin: 40px 0 0 0 ;
`


