import React, { useEffect, useState } from 'react'
import { IconsContainer, LinksContainer, Logo, NavbarContainer, NavLinkStyled, ToggleMenuIcon } from './NavbarStyled'
import { NavLink } from 'react-router-dom';


import { LuMenu } from "react-icons/lu";
import UserIcon from './User/UserIcon/UserIcon';
import CartIcon from './Cart/CartIcon/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../../Redux/ToggleMenu/toggleMenuSlice';
import { showModalUser } from '../../Redux/User/userSlice';







const Navbar = () => {


const [changeColor, setchangeColor] = useState("transparent")

const dispatch = useDispatch()

const {modalUser} = useSelector(state => state.user)


    const changeColorOnScroll = () => {

        if (window.scrollY >= 0.5) {
            setchangeColor('#292929')
        }
        else { setchangeColor('transparent') }
    }



    useEffect(() => {
        window.addEventListener('scroll', changeColorOnScroll);
    }, [])




    const closeModalUserOnToggleMenu = () => {
        if (modalUser) {
          return dispatch(showModalUser());
        }
        else {return null}
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


                    <CartIcon />

                    <UserIcon/>

                    <ToggleMenuIcon onClick={()=>{dispatch(showMenu()); 
                    closeModalUserOnToggleMenu();
                    window.scrollBy(0,1)
                    }}>
                        <LuMenu />
                    </ToggleMenuIcon>

                </IconsContainer>


            </NavbarContainer>

    )
}

export default Navbar
