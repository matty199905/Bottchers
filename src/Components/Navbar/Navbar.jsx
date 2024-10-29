import React, { useEffect, useState } from 'react'
import { IconsContainer, LinksContainer, Logo, NavbarContainer, NavLinkStyled } from './NavbarStyled';
import { NavLink } from 'react-router-dom';


import UserIcon from './User/UserIcon/UserIcon';
import CartIcon from './Cart/CartIcon/CartIcon';
import { useDispatch } from 'react-redux';
import { showCartToggle } from '../../Redux/Cart/CartSlice';


const Navbar = () => {


const [changeColor, setchangeColor] = useState("transparent")

const ChangeColorOnScroll = () => {

    if(window.scrollY >= 1) {
        setchangeColor('#292929')
    }
    else {setchangeColor('transparent')}
}

useEffect(()=> {
    window.addEventListener('scroll', ChangeColorOnScroll);
    return () => {
        window.removeEventListener('scroll', ChangeColorOnScroll)
    }

},[])

const dispatch = useDispatch()

    return (
        <NavbarContainer
        style={{backgroundColor: changeColor, transition: 'all ease 0.4s'}}
        >



            <NavLink to='/'>
                <Logo>Böttchers.</Logo>
            </NavLink>




            <LinksContainer>
                <NavLinkStyled to='/products'>Productos</NavLinkStyled>
                <NavLinkStyled to='/aboutus'>Sobre Nosotros</NavLinkStyled>
                <NavLinkStyled to='/Contacto'>Contactanos</NavLinkStyled>
                <NavLinkStyled onClick={()=> window.scrollTo(0, 10000)}>Mas Info</NavLinkStyled>
            </LinksContainer>



            <IconsContainer>

                <CartIcon onClick={() => dispatch(showCartToggle())}/>
                    
                <UserIcon />

            </IconsContainer>

        </NavbarContainer>
    )
}

export default Navbar
