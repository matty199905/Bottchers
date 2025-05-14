import React, { useEffect } from 'react'
import { LayoutWrapper, UpBtn } from './LayoutStyled'
import { useLocation } from 'react-router-dom'
import { IoArrowUpCircle } from "react-icons/io5";


type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {

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
