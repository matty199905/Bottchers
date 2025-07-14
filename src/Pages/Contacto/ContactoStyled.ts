import { Form } from 'formik'
import {styled} from 'styled-components'

export const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: auto;
padding-bottom: 50px;
`


export const ContactImg = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`

export const ContactTitleContainer = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
h1{
    font-size: 60px;
    font-style: oblique;
    font-weight: 500;
    letter-spacing: 2px;
    color:white;
    opacity: 0.9;
    margin-top: -100px;}
`

export const ContactIconStyled = styled.div`
font-size: 50px;
    color:white;
    opacity: 0.9;
    margin-top: -20px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover{
        color: #ff7b00;
        transition: all ease 0.3s;
    }
    
`

export const FormikContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 80px;
margin-top: 40px;
h2{
    margin: 50px 0px 0px ;
    font-size: 46px;
    font-weight: 400;
    font-style: oblique;
    letter-spacing: 2px;
    opacity: 0.9;
    border-bottom: 1px solid white;
    padding-bottom: 30px;
    @media (max-width: 1090px) {
font-size: 40px;
padding: 0 20px;
text-align: center;
}
}
`

export const FormContainer = styled(Form)`
display: flex;
justify-content: center;
align-items:center;
flex-flow: row wrap;
gap: 20px;
width: 80vw;
height: auto;
padding-bottom: 60px;
@media (max-width: 1320px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    margin-top: -30px;
}
`

