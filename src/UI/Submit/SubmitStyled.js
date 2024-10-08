import styled from "styled-components";

export const BtnContainer = styled.button`
display: flex;
justify-content: center;
align-items: center;
align-self: ${(props)=>(props.contacto === true ? 'last baseline' : 'center')};
width: 180px;
height: 60px;
border-radius: 10px;
background-color: 
${(props)=>(props.enviado ? '#00af00' : props.contacto ? '#00009499' : 'orangered')};
border: none;
color: white;
cursor: pointer;
transition: all ease .1s;
&:hover{
    opacity: .8;
    transition: all ease .3s;
}
&:active{
    background-color: transparent;
    color: ${(props)=>(props.register || props.login ? 'white' : 'black')};
    transform: scale(0.9);
    transition: all ease .1s;
}

`