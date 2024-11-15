import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FooterWrapper = styled.footer`
position: absolute;
bottom: 0px;
width: 100vw;
z-index: 100;
@media (max-width: 940px) {
bottom: -300px;
}
@media (max-width: 640px) {
bottom: -500px;
}
@media (max-width: 576px) {
bottom: -550px;
}
`

export const FooterContainer = styled.div`
background-color: #2c2c2c;
height: 100%;
`

export const ColumnsContainer = styled.div`
display: flex;
justify-content: center;
align-content: center;
flex-flow: row wrap;
gap: 0px;
padding: 0px 20px;
`



export const FooterColumn = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: flex-start;
gap:20px;
width: 300px;
h3{
    color: orange;
font-size: 17px;
font-weight: 400;
font-style: italic;
height: 30px;
width: 87%;
padding: 20px;
text-align: center;
letter-spacing: 1px;
border-bottom: 1px solid rgba(255, 255, 255, 0.85);
}
ul{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px;
    margin: 0px;
    gap: 10px;
    width: 90%;
    margin-top: -20px;
}
`


export const LinkStyled = styled(Link)`

color: rgba(255, 255, 255, 0.85);
border-bottom: ${(props) => (props.icon ? 'none' : '1px solid rgba(255, 255, 255, 0.55)')};
padding-bottom: 15px;
margin-left: 27px ;
width: 200px;
text-align: center;
letter-spacing: 1px;
font-weight: 300;
font-style: oblique;
font-size: ${(props) => (props.icon ? '35px' : '14px')};
transition: all ease 0.3s;
&:hover{
    cursor: pointer;
    color: orange;
    font-weight: 500;
     transition: all ease 0.3s;
     transform: scale(1.05);
}
@media ( max-width:404px) {
    font-size: ${(props) => (props.icon ? '25px' : '14px')};
}
`

export const SiguenosContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 60px;
span{
    border-bottom: 1px solid rgba(255, 255, 255, 0.55);
    padding-bottom: 15px;
    width: 200px;
    text-align: center;
    color: orange;
    font-style:oblique;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 1.5px;
}
p{
    color: rgba(255, 255, 255, 0.75);
    font-style:oblique;
    font-size: 17px;
    text-align: center;
    padding: 0 20px;
}
@media (max-width: 460px) {
    p{font-size: 14px}
}
`

export const IconsContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
gap: 30px;
margin-top: 10px;
margin-right: 25px;
font-size: 40px;
padding-bottom: 40px;
padding: 0 20px;
`

export const IconStyled = styled.div`
transition: all ease 0.3s;
color: rgba(255, 255, 255, 0.85);
&:hover{
    cursor: pointer;
    transition: all ease 0.3s;
    transform: scale(1.1);
}
@media (max-width: 460px) {
    font-size: 30px;
}
`