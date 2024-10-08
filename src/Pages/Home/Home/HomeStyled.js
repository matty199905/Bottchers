import { Link } from "react-router-dom";
import styled from "styled-components";


export const HomeWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: 3000px;
`

export const HeroContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
    height: 700px;
    width: 100%;
    padding-right: 140px;
`


export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 80px 0px 0px 205px;
width: 590px;
padding: 0px 0px;
h1{
    font-size: 52px;
    font-style: oblique;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: center;
    background: linear-gradient(to right, white, #adadad);
    color: transparent;
    background-clip: text;
}
`

export const ProductsLink = styled(Link)`
   background-color: white;
   width: 200px;
   opacity: 0.8;
   padding: 10px 0px;
   border: none;
   border-radius: 2px;
   font-size: 16px;
   font-style: oblique;
   text-align: center;
    cursor: pointer;
    transition: all ease .3s;
    &:hover{
        opacity: 1;
        background-color: orange;
        transition: all ease .3s;
        z-index: 0;}
        span{ color: black;
            transition: all ease .1s;
        &:hover{ color: white;
            transition: all ease .1s;}}

`
