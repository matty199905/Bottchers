import styled from "styled-components";

export const ButtonStyled = styled.button`
width: ${(props)=>(props.page ? '50px' : '150px' && props.ProductoDinamico === true ? '100%' : '150px')};
height: ${(props)=>(props.page ? '50px' : '40px' && props.ProductoDinamico === true ? '70px' : '40px')};
padding: 10px;
margin-top:  ${(props)=>(props.ProductoDinamico === true ? '80px' : '0px')};
background-color: darkblue;
opacity: 0.8;
color: white;
border: none;
border-radius: ${(props)=>(props.page ? '50%' : 'none')};
font-weight: 300;
font-size: 12px;
cursor: pointer;
transition: all ease .3s;
&:hover{
    border-radius: 5px;
    transition: all ease .3s;
    transform: scale(.99);
    background-color: orange;
    opacity: 1;
}
`