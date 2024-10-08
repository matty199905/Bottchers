import React from 'react'
import { IconsContainer, IconCartStyled, LinksContainer, Logo, NavbarContainer, NavLinkStyled, UserStyled, IniciaSesion } from './NavbarStyled'
import { NavLink } from 'react-router-dom'

import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";


const Navbar = () => {
    return (
        <NavbarContainer>



            <NavLink to='/'>
                <Logo>Böttchers.</Logo>
            </NavLink>




            <LinksContainer>
                <NavLinkStyled to='/products'>Productos</NavLinkStyled>
                <NavLinkStyled to='/'>Inspiraciones</NavLinkStyled>
                <NavLinkStyled to='/'>Servicios</NavLinkStyled>
                <NavLinkStyled to='/aboutus'>Sobre Nosotros</NavLinkStyled>
            </LinksContainer>



            <IconsContainer>

                <IconCartStyled>
                    <PiShoppingCartLight />
                </IconCartStyled>

                <NavLinkStyled to='/register'>
                    <UserStyled>
                        <CiUser />
                        <IniciaSesion>Inicia Sesión</IniciaSesion>
                    </UserStyled>
                </NavLinkStyled>
            </IconsContainer>

        </NavbarContainer>
    )
}

export default Navbar
