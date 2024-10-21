import styled from "styled-components";
import { NavLink } from 'react-router-dom'


export const NavbarContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
padding: 30px 30px 15px 30px;
background-color: transparent;
width: 100vw;
height: 40px;
z-index: 100;
`

export const Logo = styled.button`
color: white;
font-size: 35px;
font-weight: 800;
background-color: transparent;
border: none;
 transition: all ease 0.3s;
&:hover{
    cursor: pointer;
    color: #ff7b00;
     transition: all ease 0.3s;
}
`

export const LinksContainer = styled.ul`
display: flex;
gap: 30px;
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
font-size: 18px;
font-weight:400;
transition: all ease .3s;
color: white;
&:hover{
    cursor: pointer;
    transition: all ease 0.3s;
    color: #ff7b00;
   
}
`
