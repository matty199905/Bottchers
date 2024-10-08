import React from 'react'
import { ArrowStyled, CuotasSinInteresContainer, DoceCuotasSinInteresContainer, ImgContainer, MostarFiltros, NumeroCuotas, ProductsTitleContainer, ProductsWrapperPage, } from './ProductosStyled'
import ProductsImg from '../../img/ProductsImg.jpg'
import Visa from '../../img/Visa.png'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import ProductsContainer from '../../Components/Products/ProductsWrapper/ProductsContainer'
import ModalCategories from '../../Components/Products/ModalCategories/ModalCategories'



const Productos = () => {
    return (
        <ProductsWrapperPage>

            <ImgContainer style={{ backgroundImage: `url(${ProductsImg})` }}>

                <ProductsTitleContainer>
                    <h1>SOFÁS CAMA</h1>
                    <DoceCuotasSinInteresContainer>

                        <NumeroCuotas>12</NumeroCuotas>
                        <CuotasSinInteresContainer>CUOTAS SIN INTERÉS
                            <img src={Visa} alt="Visa" />
                        </CuotasSinInteresContainer>
                    </DoceCuotasSinInteresContainer>
                    <span>O 20% DE DESCUENTO EN EFECTIVO ABONANDO EN NUESTRAS SUCURSALES</span>
                </ProductsTitleContainer>
            </ImgContainer>




            <MostarFiltros>
                Mostrar Filtros<ArrowStyled><MdOutlineArrowForwardIos /></ArrowStyled>
            </MostarFiltros>





            <ModalCategories />


            <ProductsContainer />




        </ProductsWrapperPage>
    )
}

export default Productos
