import styled from "styled-components";
import { motion } from "framer-motion"


export const ModalUserContainer = styled(motion.div)`
position: fixed;
top: 80px;
right: -10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
width: 300px;
height: 90px;
background: linear-gradient(rgba(255, 255, 255, 0.274), rgba(255, 255, 255, 0.301));
backdrop-filter: blur(15px);
border: 1px solid grey;
border-radius: 5px;
z-index: 400;
@media (max-width: 470px) {
width: 101vw;
height: 70px;
}
`


export const ModalSpan = styled.span`
font-size: 18px;
font-weight: 600;
color:  #ffffffef;
cursor: pointer;
transition: all ease 0.2s;
&:hover{
    color: orange;
    transition: all ease 0.2s;
}
`

