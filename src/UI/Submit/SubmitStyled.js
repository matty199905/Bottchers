import styled from "styled-components";

export const BtnContainer = styled.button`
display: flex;
justify-content: center;
align-items: center;
align-self: ${(props) => (props.contacto === true ? 'last baseline' : 'center')};
width: ${(props) => (props.cart === true ? '100% ' : '180px')};
height: ${(props) => (props.cart === true ? '45px ' : '60px')};
background-color: 
${({enviado, contacto, cart}) => (enviado === true ? '#00af00' : contacto || cart === true ? 'darkblue' : 'orange')};  

margin-top: ${(props) => (props.cart === true ? '20px ' : '0px' || props.checkout === true ? '25px' : undefined)};
margin-bottom: ${(props) => (props.cart === true ? '-12px ' : '0px')};
border: none;
border-radius: ${(props) => (props.cart === true ? '5px' : '10px')};
color: white;
cursor: pointer;
transition: all ease .1s;
&:hover{
    opacity: .8;
    transition: all ease .3s;
}
&:active{
    background-color: transparent;
    color: ${(props) => (props.register || props.login ? 'white' : 'black')};
    transform: scale(0.9);
    transition: all ease .1s;
}
&:disabled {
    background-color: grey;
    cursor: not-allowed;
}
@media (max-width: 1090px) {
    align-self: ${(props) => (props.contacto === true ? 'center' : 'center')};
}
`