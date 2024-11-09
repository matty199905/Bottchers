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

    const { selectedFilter } = useSelector(state => state.filters)

    const {showFilters} = useSelector(state => state.filters)





    const paginadoTodosLosProductos = productos.map(([key, array]) => {

        if (selectedFilter) {
             //renderizar x categorias
             if (key === selectedFilter) {return array.map((item) => { return <ProductCard {...item} key={item.id} /> }) }

             else {          //renderizar x filtros
              return array.map((item) => {
                    return item.filters.map((filter) => {
                        if (filter === selectedFilter) {
                            return <ProductCard {...item} key={item.id} />
                        }
                    })
                })}
        }

        else if (key === 'mesas extensibles') { return null }

        else { return array.map((item) => { if (limit >= item.id) { return <ProductCard {...item} key={item.id} /> } }) }
    })






    return (
        <>

            <ProductsContainerStyled showFilters={showFilters}>

                {

                    page === 'todosLosProductos' ? paginadoTodosLosProductos :

                        productos.map(([key, array]) => { if (key === page) { return array.map((item) => { return <ProductCard {...item} key={item.id} /> }) } })



                }

<ModalCategories/>
           
            </ProductsContainerStyled>

            {page === 'todosLosProductos' &&

                <PagesContainer hide={selectedFilter !== null}>

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
