import React from 'react'
import { CamasMultiposicion, CategoriesContainer, Comedores, Living, MesasExtensibles, Relax, SofásCama } from './CategoriesGridStyled'

import RelaxImg from '../../../img/Relax.jpg'
import MesaExtensible from '../../../img/Mesaextensible.jpg'
import LivingImg from '../../../img/Living.jpg'
import Multiposicion from '../../../img/Multiposicion.jpg'
import SofaCama from '../../../img/sofacama.webp'
import ComedoresImg from '../../../img/comedores.jpeg'
import { useNavigate } from 'react-router-dom'



const CategoriesGrid = () => {

    const navigate = useNavigate()


    return (
        <CategoriesContainer>


            <Relax onClick={() => navigate('/relax')} style={{ backgroundImage: `url(${RelaxImg})` }} ><h3>Relax</h3>
            </Relax>


            <CamasMultiposicion onClick={() => navigate('/camas-multiposicion')} style={{ backgroundImage: `url(${Multiposicion})` }}><h3>Camas Multiposición</h3>
            </CamasMultiposicion>


            <Comedores onClick={() => navigate('/comedores')} style={{ backgroundImage: `url(${ComedoresImg})` }}><h3>Comedores</h3>
            </Comedores>


            <MesasExtensibles onClick={() => navigate('mesas-extensibles')} style={{ backgroundImage: `url(${MesaExtensible})` }}><h3>Mesas Extensibles</h3>
            </MesasExtensibles>


            <SofásCama onClick={() => navigate('/sofas-cama')} style={{ backgroundImage: `url(${SofaCama})` }}><h3>Sofás Cama</h3>
            </SofásCama>


            <Living onClick={() => navigate('/living')} style={{ backgroundImage: `url(${LivingImg})` }}><h3>Living</h3>
            </Living>

        </CategoriesContainer>
    )
}

export default CategoriesGrid
