import { Link } from "react-router-dom";
import styled from "styled-components";


export const HomeWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: 2400px;
@media (max-width: 940px) {
height: 2250px;}
@media (max-width: 440px) {
    height: 2300px;
    margin-bottom: 60px;
}
@media (max-width: 292px) {
    height: 2400px;
}
@media (min-height: 610px) {
    height: 2420px;
}
`

export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
    
`


export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 80px 0px 0px 0px;
width: 590px;
padding: 0px 0px;
h1{
    font-size: 55px;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: center;
    background: linear-gradient(to left, #ffffff, #adadad);
    color: transparent;
    background-clip: text;
}
@media (max-width: 580px) {
h1{
    font-size: 45px;
    padding: 0 20px;
}
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


export const CategoriesSection = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
margin-top: 50px;
h2{
    color: black;
    font-size: 49px;
    font-weight: 500;
    margin-bottom: 0px;
    text-align: center;
   
}
p{
    width: 50vw;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.6;
    line-height: 28px;
    text-align: center;
}
@media (max-width: 750px) {
h2 {
    font-size: 40px;
    margin-top: 10px;
    padding: 0 20px;
}
}
`
