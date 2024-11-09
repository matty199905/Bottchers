import React from 'react'
import { FilterContainer, FiltersContainer, LiContainer } from './ModalCategoriesStyled'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { filterSelection, show } from '../../../Redux/Filters/filtersSlice'


const ModalCategories = () => {

    const { showFilters } = useSelector(state => state.filters)

    const dispatch = useDispatch()

    const { selectedFilter } = useSelector(state => state.filters)

    const { payload } = useSelector(state => state.filters)








    return (
        <AnimatePresence>
            {showFilters &&


                <FiltersContainer
                    initial={{ translateY: -600 }}
                    animate={{ translateY: 0 }}
                    exit={{ translateY: -600 }}
                    transition={{ type: 'spring', damping: 25 }}
                    key='cart-modal'>




                    <FilterContainer>
                        <h3>Por Categorias</h3>
                        <ul>
                            <LiContainer activeFilter={selectedFilter !== null && payload === 'camas multiposiciones'}><li onClick={() => { dispatch(filterSelection('camas multiposiciones')); dispatch(show()) }}>- Camas multiposiciones</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'comedores'}><li onClick={() => { dispatch(filterSelection('comedores')); dispatch(show()) }}>- Comedores</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'living'}><li onClick={() => {dispatch(filterSelection('living')); dispatch(show())}}>- Living</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'mesas extensibles'}><li onClick={() => {dispatch(filterSelection('mesas extensibles'));dispatch(show())}}>- Mesas extensibles</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'relax'}><li onClick={() => {dispatch(filterSelection('relax'));dispatch(show())}}>- Relax</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'sofas cama'}><li onClick={() => {dispatch(filterSelection('sofas cama')); dispatch(show())}}>- Sofas cama</li></LiContainer>

                        </ul>
                    </FilterContainer>



                    <FilterContainer>
                        <h3>Material</h3>
                        <ul>
                            <LiContainer activeFilter={selectedFilter !== null && payload === 'cuero'}><li onClick={() => {dispatch(filterSelection('cuero')); dispatch(show())}}>- Cuero</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'eco cuero'}><li onClick={() => {dispatch(filterSelection('eco cuero'));dispatch(show())}}>- EcoCuero</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'tela'}><li onClick={() => {dispatch(filterSelection('tela'));dispatch(show())}}>- Tela</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'madera'}><li onClick={() => {dispatch(filterSelection('madera'));dispatch(show())}}>- Madera</li></LiContainer>

                        </ul>
                    </FilterContainer>



                    <FilterContainer>
                        <h3>Plazas</h3>
                        <ul>
                            <LiContainer activeFilter={selectedFilter !== null && payload === '2 plazas'}><li onClick={() => {dispatch(filterSelection('2 plazas'));dispatch(show())}}>- 2 plazas</li></LiContainer>

                            <LiContainer activeFilter={payload === '1 plaza'}><li onClick={() => {dispatch(filterSelection('1 plaza'));dispatch(show())}}>- 1 plaza</li></LiContainer>
                        </ul>
                    </FilterContainer>

                    <FilterContainer>
                        <h3>Tamaño</h3>
                        <ul>
                            <LiContainer activeFilter={selectedFilter !== null && payload === '2 cuerpos'}><li onClick={() => {dispatch(filterSelection('2 cuerpos'));dispatch(show())}}>- 2 Cuerpos</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === '2 cuerpos modulares'}>  <li onClick={() => {dispatch(filterSelection('2 cuerpos modulares'));dispatch(show())}}>- 2 Cuerpos modulares</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === '3 cuerpos'}><li onClick={() => {dispatch(filterSelection('3 cuerpos'));dispatch(show())}}>- 3 Cuerpos</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === '3 cuerpos modulares'}><li onClick={() => {dispatch(filterSelection('3 cuerpos modulares'));dispatch(show())}}>- 3 Cuerpos modulares</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'esquinero'}><li onClick={() => {dispatch(filterSelection('esquinero'));dispatch(show())}}>- Esquinero</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'sillones masajeadores'}><li onClick={() => {dispatch(filterSelection('sillones masajeadores'));dispatch(show())}}>- Sillones masajeadores</li></LiContainer>
                        </ul>
                    </FilterContainer>



                    <FilterContainer >
                        <h3>Entrega</h3>
                        <ul>
                            <LiContainer activeFilter={selectedFilter !== null && payload === '35 dias'}><li onClick={() => {dispatch(filterSelection('35 dias'));dispatch(show())}}>- 35 Dias</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === '40 dias'}><li onClick={() => {dispatch(filterSelection('40 dias'));dispatch(show())}}>- 40 Dias</li></LiContainer>

                            <LiContainer activeFilter={selectedFilter !== null && payload === 'entrega inmediata'}><li onClick={() => {dispatch(filterSelection('entrega inmediata'));dispatch(show())}}>- Entrega inmediata</li></LiContainer>
                        </ul>
                    </FilterContainer>

                </FiltersContainer>

            }
        </AnimatePresence>

    )
}

export default ModalCategories
