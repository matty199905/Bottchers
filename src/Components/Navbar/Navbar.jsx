import React, { useEffect, useState } from 'react'
import { IconsContainer, LinksContainer, Logo, NavbarContainer, NavLinkStyled, ToggleMenuIcon } from './NavbarStyled'
import { NavLink } from 'react-router-dom';


import { LuMenu } from "react-icons/lu";
import UserIcon from './User/UserIcon/UserIcon';
import CartIcon from './Cart/CartIcon/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { showCartToggle } from '../../Redux/Cart/CartSlice';
import { show } from '../../Redux/Filters/filtersSlice'
import { showMenu } from '../../Redux/ToggleMenu/toggleMenuSlice';







const Navbar = () => {


const [changeColor, setchangeColor] = useState("transparent")




    const changeColorOnScroll = () => {

        if (window.scrollY >= 0.5) {
            setchangeColor('#292929')
        }
        else { setchangeColor('transparent') }
    }




    useEffect(() => {
        window.addEventListener('scroll', changeColorOnScroll);
    }, [])





    const dispatch = useDispatch()

    const { showFilters } = useSelector(state => state.filters)

    const closeCategoryOnCart = () => {
        if (showFilters === true) {
            return dispatch(show())
        }
        else { return null }
    }




    return (

            <NavbarContainer
                style={{ backgroundColor: changeColor, transition: 'all ease 0.4s' }}
            >



                <NavLink to='/'>
                    <Logo>Böttchers.</Logo>
                </NavLink>




                <LinksContainer>
                    <NavLinkStyled to='/products'>Productos</NavLinkStyled>
                    <NavLinkStyled to='/aboutus'>Sobre Nosotros</NavLinkStyled>
                    <NavLinkStyled to='/Contacto'>Contactanos</NavLinkStyled>
                    <NavLinkStyled onClick={() => window.scrollTo(0, 10000)}>Mas Info</NavLinkStyled>
                </LinksContainer>



                <IconsContainer>


                    <CartIcon onClick={() => { dispatch(showCartToggle()); closeCategoryOnCart() }} />

                    <UserIcon />

                    <ToggleMenuIcon onClick={()=>{dispatch(showMenu()); 
                        window.scrollTo({top: 1})
                    }}>
                        <LuMenu />
                    </ToggleMenuIcon>

                </IconsContainer>


            </NavbarContainer>

    )
}

export default Navbar
