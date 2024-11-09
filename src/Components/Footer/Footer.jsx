import React from 'react'
import { FooterColumn, FooterContainer, ColumnsContainer, LinkStyled, SiguenosContainer, IconsContainer, IconStyled } from './FooterStyled'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";



const Footer = () => {



    return (
        <FooterContainer>

            <ColumnsContainer>


                <FooterColumn>
                    <h3>Sobre Nosotros</h3>

                    <ul>

                        <LinkStyled to=''>Hechos</LinkStyled>
                        <LinkStyled to=''>Sostenibilidad</LinkStyled>
                        <LinkStyled to=''>Prensa</LinkStyled>

                    </ul>
                </FooterColumn>

                <FooterColumn>
                    <h3>Contacto</h3>

                    <ul>

                        <LinkStyled to="/contacto">Contacto</LinkStyled>
                        <LinkStyled to=''>Encuentranos</LinkStyled>
                        <LinkStyled to=''>Mas Info</LinkStyled>

                    </ul>
                </FooterColumn>


                <FooterColumn>
                    <h3>Legal</h3>

                    <ul>

                        <LinkStyled to=''>Derechos de Distribución</LinkStyled>
                        <LinkStyled to=''>Protrección de Datos</LinkStyled>
                        <LinkStyled to=''>Pie de Imprenta</LinkStyled>

                    </ul>
                </FooterColumn>


            </ColumnsContainer>

            <SiguenosContainer>

                <span>SEGUINOS</span>

                <p>Enterate de las últimas novedades en las redes que más te gusten.</p>


                <IconsContainer>

                    <IconStyled>
                        <LinkStyled to='https://www.facebook.com/' target='_blank' icon="true"><FaFacebookF/></LinkStyled>
                    </IconStyled>

                    <IconStyled>
                        <LinkStyled to='https://www.instagram.com/' target='_blank' icon="true"><IoLogoInstagram/></LinkStyled>   
                    </IconStyled>

                    <IconStyled>
                        <LinkStyled to='https://www.youtube.com/' target='_blank' icon="true"> <ImYoutube2/></LinkStyled>
                    </IconStyled>

                    <IconStyled>
                        <LinkStyled to='https://x.com/?lang=es' target='_blank' icon><BsTwitterX/></LinkStyled>
                    </IconStyled>

                </IconsContainer>


            </SiguenosContainer>

        </FooterContainer>
    )
}

export default Footer
