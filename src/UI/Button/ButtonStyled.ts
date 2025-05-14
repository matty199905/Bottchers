import styled from "styled-components";


export type ButtonProps = {
    
    page?: boolean,
    productoDinamico?: boolean,
    disabled?: boolean,
   
  }

export const ButtonStyled = styled.button<ButtonProps>`
width: ${(props)=>(props.page === true ? '80px' : props.productoDinamico === true ? '100%' : '150px')};
height: ${(props)=>(props.page === true ? '50px' : props.productoDinamico === true ? '70px' : '40px')};
padding: 10px;
background-color: darkblue;
opacity: 0.7;
color: white;
border: none;
border-radius: ${(props)=>(props.page ? '10%' : 'none')};
font-weight: 300;
font-size: 12px;
z-index: 0px;
cursor: pointer;
transition: all ease .3s;
&:hover{
    border-radius: 5px;
    transition: all ease .3s;
    transform: scale(.99);
    background-color: orange;
    opacity: 1;
}
&:disabled {
    background-color: grey;
    cursor: not-allowed;
}
@media (max-width: 1020px) {
width: ${(props)=>(props.page ? '80px' : '100%')}
}
`