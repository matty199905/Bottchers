import React from 'react'
import { ProductsWrapperPage } from './ProductosStyled'

import ProductosImg from '../../img/ProductosImg.jpg'
import ProductsContainer from '../../Components/Products/ProductsWrapper/ProductsContainer'
import IntroPageContainer from '../../Components/IntroPageContainer/IntroPageContainer'



const Productos = () => {
    return (
        <ProductsWrapperPage>

            <IntroPageContainer
                background={ProductosImg}
                title={'Nuestros Productos'}
            />


            <ProductsContainer />








        </ProductsWrapperPage>
    )
}

export default Productos
