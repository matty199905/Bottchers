import React from 'react'
import { ProductsWrapperPage } from './ProductosStyled'

import ProductosImg from '../../img/ProductosImg.jpg'

import IntroPageContainer from '../../Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '../../Components/Products/ProductsWrapper/ProductsWrapper'




const Productos = () => {
    return (
        <ProductsWrapperPage>

            <IntroPageContainer
                background={ProductosImg}
                title={'Nuestros Productos'}
            />


            <ProductsWrapper 
            page='todosLosProductos' />




        </ProductsWrapperPage>
    )
}

export default Productos
