import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home/Home/Home'
import AboutUs from '../Pages/About Us/AboutUs'

import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import Contact from '../Pages/Contacto/Contact'
import Productos from '../Pages/Productos/Productos'
import Checkout from '../Pages/Checkout/Checkout'
import RelaxPage from '../Pages/CategoriesHome/Relax/RelaxPage'
import Multiposicion from '../Pages/CategoriesHome/CamasMultiposicion/Multiposicion'
import Comedores from '../Pages/CategoriesHome/Comedores/Comedores'
import MesasExtensibles from '../Pages/CategoriesHome/MesasExtensibles/MesasExtensibles'
import SofasCama from '../Pages/CategoriesHome/SofasCamas/SofasCama'
import Living from '../Pages/CategoriesHome/Living/Living'
import ProductoDinamico from '../Pages/ProductoDinamico/ProductoDinamico'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Orders from '../Pages/Orders/Orders'
import OrderOverview from '../Pages/OrderOverview/OrderOverview'





const RoutesApp: React.FC = () => {


  return (
    <Routes>

      <Route path='/'>
        <Route index element={<Home />} />

        <Route path='relax'>
          <Route index element={<RelaxPage />} />
          <Route path=':product' element={<ProductoDinamico />} />
        </Route>

        <Route path='camas-multiposicion'>
          <Route index element={<Multiposicion />} />
          <Route path=':product' element={<ProductoDinamico />} />
        </Route>

        <Route path='comedores'>
          <Route index element={<Comedores />} />
          <Route path=':product' element={<ProductoDinamico />} />
        </Route>

        <Route path='mesas-extensibles'>
          <Route index element={<MesasExtensibles />} />
          <Route path=':product' element={<ProductoDinamico />} />
        </Route>

        <Route path='sofas-cama'>
          <Route index element={<SofasCama />} />
          <Route path=':product' element={<ProductoDinamico />} />
        </Route>

        <Route path='living'>
          <Route index element={<Living />} />
          <Route path=':product' element={<ProductoDinamico />} />
        </Route>

      </Route>



      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contacto' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/orders'>
        <Route index element={<Orders />} />
        <Route path=':orderOverview' element={<OrderOverview />} />
      </Route>



      <Route path='/products'>
        <Route index element={<Productos />} />
        <Route path=':product' element={<ProductoDinamico />} />
      </Route>


      <Route
        path='/checkout'
        element={
          <ProtectedRoute redirectTo='/login'>
            <Checkout />
          </ProtectedRoute>
        }
      />


    </Routes>
  )
}

export default RoutesApp
