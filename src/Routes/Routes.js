import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home/Home/Home'
import AboutUs from '../Pages/About Us/AboutUs'

import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import Contact from '../Pages/Contacto/Contact'
import Productos from '../Pages/Productos/Productos'


const RoutesApp = () => {
  return (
 <Routes>
<Route path='/' element={<Home />}/>
<Route path='/aboutus' element={<AboutUs />}/>
<Route path='/contacto' element={<Contact/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/login/' element={<Login/>}/>
<Route path='/products' element={<Productos/>}/>
</Routes>
  )
}

export default RoutesApp
