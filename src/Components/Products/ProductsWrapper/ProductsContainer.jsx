import React, { useState } from 'react'
import { PagesContainer, ProductsContainerStyled } from './ProductsContainerStyled'
import ModalCategories from '../ModalCategories/ModalCategories'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import Button from '../../../UI/Button/Button'



const ProductsContainer = ({ page }) => {


    const Initial_Limit = 8

    const [limit, setLimit] = useState(Initial_Limit)

    const { totalProducts } = useSelector(state => state.productos)

    const { productos } = useSelector(state => state.productos)

    const arrayProductos = Object.entries(productos)


    const paginadoTodosLosProductos = arrayProductos.map(([key, array]) => {
        if (key === 'mesas extensibles') { return null }
        else { return array.map((item) => { if (limit >= item.id) { return <ProductCard {...item} key={item.id} /> } }) }
    })




    return (
        <>

            <ProductsContainerStyled>


                    <ModalCategories
                    />


                



                {

                    page === 'todosLosProductos' ? paginadoTodosLosProductos :

                        arrayProductos.map(([key, array]) => { if (key === page) { return array.map((item) => { return <ProductCard {...item} key={item.id} /> }) } })


                }

            </ProductsContainerStyled>

            {page === 'todosLosProductos' &&

                <PagesContainer >

                    <Button
                        onClick={() => setLimit(prevLimit => prevLimit - Initial_Limit)}
                        disabled={Initial_Limit >= limit}
                        page='true'>
                        Ver Menos</Button>


                    <Button onClick={() => setLimit(prevLimit => prevLimit + Initial_Limit)}
                        page='true'
                        disabled={totalProducts <= limit}
                    >Ver Más</Button>


                </PagesContainer>

            }


        </>
    )
}

export default ProductsContainer
