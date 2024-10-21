import { NavLink } from "react-router-dom"
import styled from "styled-components"



export const UserStyled = styled.div`
display:flex;
align-items: center;
font-size: 35px;
color: white;
&:hover{
    cursor: pointer;
    transition: all ease 0.5s;
    color: #ff7b00;
}

`

export const IniciaSesion = styled.span`
font-size: 16px;
font-weight: 300;
padding: 10px;
`

export const UserNavLinkStyled = styled(NavLink)`
background-color: transparent;
text-decoration: none;
font-size: 18px;
font-weight:300;
color: white;
transition: all ease 0.3s;
&:hover{
    cursor: pointer;
    transition: all ease 0.3s;
    color: #ff7b00;
}
`