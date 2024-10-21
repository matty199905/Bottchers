import React from 'react'
import { IconsContainer, LinksContainer, Logo, NavbarContainer, NavLinkStyled } from './NavbarStyled';
import { NavLink } from 'react-router-dom';


import UserIcon from './User/UserIcon/UserIcon';
import CartIcon from './Cart/CartIcon/CartIcon';


const Navbar = () => {
    return (
        <NavbarContainer>



            <NavLink to='/'>
                <Logo>Böttchers.</Logo>
            </NavLink>




            <LinksContainer>
                <NavLinkStyled to='/products'>Productos</NavLinkStyled>
                <NavLinkStyled to='/Contacto'>Contactanos</NavLinkStyled>
                <NavLinkStyled to='/'>Servicios</NavLinkStyled>
                <NavLinkStyled to='/aboutus'>Sobre Nosotros</NavLinkStyled>
            </LinksContainer>



            <IconsContainer>

                <CartIcon />
                <UserIcon />

            </IconsContainer>

        </NavbarContainer>
    )
}

export default Navbar
