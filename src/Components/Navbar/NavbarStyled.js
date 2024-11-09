import styled from "styled-components";
import { NavLink } from 'react-router-dom'


export const NavbarContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: flex-end;
position: fixed;
top: 0;
padding-bottom: 10px;
width: 100vw;
height: 70px;
z-index: 200;
`

export const Logo = styled.button`
color: white;
font-size: 35px;
font-weight: 800;
background-color: transparent;
border: none;
margin-left: 30px;
 transition: all ease 0.3s;
&:hover{
    cursor: pointer;
    color: #ff7b00;
     transition: all ease 0.3s;
}
`

export const LinksContainer = styled.ul`
display: flex;
justify-content: center;
gap: 30px;
margin: 0px 30px 0 0;
`


export const IconsContainer = styled.div`
margin-right: 50px;
display: flex;
justify-content: center;
align-items: baseline;
gap: 20px;

`


export const NavLinkStyled = styled(NavLink)`
background-color: transparent;
text-decoration: none;
font-size: 17px;
font-weight:300;
transition: all ease .3s;
color: white;
&:hover{
    cursor: pointer;
    transition: all ease 0.3s;
    color: #ff7b00;
   
}
`
