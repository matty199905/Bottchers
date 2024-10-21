import { Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.body`
background-color: #292929;
color: white;
display: flex;
align-items: center;
justify-content: center;
`

export const LoginWrapper = styled.main`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
margin-top: 100px;
width: 100vw;
height: 1150px;
h1{
    font-size: 40px;
    font-weight: 800;

}
span{font-size:17px;
font-weight: 400;
opacity: .8;
}
`

export const LoginFormContainer = styled(Form)`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
width: 500px;
gap: 40px;
margin-top: 70px;
`

export const NoTengoCuenta = styled(Link)`
text-decoration: underline;
font-size: 15px;
margin-top: 40px;
color: white;
&:visited{
    color: #ff8f1f;
}
`