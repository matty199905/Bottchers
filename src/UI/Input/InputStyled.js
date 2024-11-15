import styled from "styled-components";

export const InputContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
gap: 10px;
`

export const LabelStyled = styled.label`
font-size: 20px;
font-weight: 400;
font-style: oblique;
margin-left: 0px;
margin-top: ${(props)=>(props.asunto === true ? '40px' : '0px')};
`

export const InputStyled = styled.input`
position: relative;
max-width: 300px;
height: 20px;
padding: 10px;
border: none;
border-bottom: ${(props)=>(props.register || props.login || props.checkout === 'true' ? '1px solid #c3c3c3' : '1px solid black')}; 
background-color: transparent;
color: ${(props)=>(props.register || props.login ? 'white' : 'black')};
&::placeholder{
    color: grey;
    position: absolute;
    top: 13px;
    font-family: system-ui;
}
`

export const TextTareaStyled = styled.textarea`
width: 500px;
height: 140px;
padding: 15px;
resize: none;
border: none;
border-bottom: 1px solid black;
background-color: transparent;
color: black;
font-family: system-ui;
&::placeholder{
    color: grey;
    position: absolute;
    top: 13px;
    font-family: system-ui;
}
@media (max-width: 1090px) {
 width: 300px;
 height: 100px;
}
`


export const ErrorMessageStyled = styled.span`
  margin-top: 5px;
  color: red;
  font-size: 12px;`