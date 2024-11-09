import React, { useEffect } from 'react'
import { LayoutWrapper, UpBtn } from './LayoutStyled'
import { useLocation } from 'react-router-dom'
import { IoArrowUpCircle } from "react-icons/io5";




const Layout = ({children}) => {

  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <LayoutWrapper>
      
      {children}


      
    <UpBtn onClick={()=> {return window.scrollTo(0,0)}}>
    <IoArrowUpCircle />
    </UpBtn>
    
    </LayoutWrapper>
  )
}

export default Layout
