import styled from "styled-components"

export const ImgContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
`

export const ProductsTitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
margin-top: 150px;
color: white;
h1{
    font-size: 23px;
    font-weight: 800;
    letter-spacing: 1px;

}
span{
    width: 90%;
    margin-top: 30px;
    text-align: center;
    font-size: 17px;
    font-weight: 500;

}
`

export const DoceCuotasSinInteresContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
text-align: center;
height: 120px;
gap: 20px;
`

export const NumeroCuotas = styled.div`
margin-left:40px;

font-size: 130px;
font-weight: 500;
transform: scale(1.1, 1.2);
`

export const CuotasSinInteresContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: left;
font-size: 30px;
font-weight: 400;
font-style: oblique;
gap: 10px;
img{
    width: 100px;
    align-self: flex-start;
}
`