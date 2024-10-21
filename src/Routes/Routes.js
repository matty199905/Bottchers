import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home/Home/Home'
import AboutUs from '../Pages/About Us/AboutUs'

import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import Contact from '../Pages/Contacto/Contact'
import Productos from '../Pages/Productos/Productos'
import ProductoDinamico from '../Pages/ProductoDinamico/ProductoDinamico'
import Checkout from '../Pages/Checkout/Checkout'
import RelaxPage from '../Pages/CategoriesHome/Relax/RelaxPage.jsx'
import Multiposicion from '../Pages/CategoriesHome/CamasMultiposicion/Multiposicion.jsx'
import Comedores from '../Pages/CategoriesHome/Comedores/Comedores.jsx'
import MesasExtensibles from '../Pages/CategoriesHome/MesasExtensibles/MesasExtensibles.jsx'
import SofasCama from '../Pages/CategoriesHome/SofasCamas/SofasCama.jsx'
import Living from '../Pages/CategoriesHome/Living/Living.jsx'



const RoutesApp = () => {
  return (
    <Routes>

      <Route path='/'>
      <Route index element={<Home />}/>
      <Route path='/relax' element={<RelaxPage/>} />
      <Route path='/camas-multiposicion' element={<Multiposicion/>} />
      <Route path='/comedores' element={<Comedores/>} />
      <Route path='/mesas-extensibles' element={<MesasExtensibles/>} />
      <Route path='/sofas-cama' element={<SofasCama/>} />
      <Route path='/living' element={<Living/>} />
      </Route>

      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contacto' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/checkout' element={<Checkout/>}/>

      <Route path='/products'>
        <Route index element={<Productos />} />
        <Route path=':product' element={<ProductoDinamico/>} />
      </Route>

     
    
      

    </Routes>
  )
}

export default RoutesApp
