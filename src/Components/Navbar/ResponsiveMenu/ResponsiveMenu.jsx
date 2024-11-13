import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { ResponsiveMenuContainer, Separator } from './ResponsiveMenuStyled'
import { showMenu } from '../../../Redux/ToggleMenu/toggleMenuSlice'
import { NavLinkStyled } from '../NavbarStyled'


const ResponsiveMenu = () => {

const {showResponsiveMenu} = useSelector(state => state.toggleMenu)

const dispatch = useDispatch()
  return (


    <AnimatePresence>

        { showResponsiveMenu &&

  <ResponsiveMenuContainer
  initial={{translateY: -600}}
  animate={{translateY: 0}}
  exit={{translateY: -600}}
  transition={{ type:'spring',  damping: 25 }}
  key='toggleMenu'>




                    <NavLinkStyled to='/products' onClick={()=>{dispatch(showMenu())}}>Productos</NavLinkStyled>
                    <Separator/>
                    <NavLinkStyled to='/aboutus' onClick={()=>{dispatch(showMenu())}}>Sobre Nosotros</NavLinkStyled>
                    <Separator/>
                    <NavLinkStyled to='/Contacto' onClick={()=>{dispatch(showMenu())}}>Contactanos</NavLinkStyled>
                    <Separator/>
                    <NavLinkStyled onClick={() => {window.scrollTo(0, 10000); dispatch(showMenu())}}>Mas Info</NavLinkStyled>

  </ResponsiveMenuContainer> 
  }

  </AnimatePresence>
  )
}

export default ResponsiveMenu
