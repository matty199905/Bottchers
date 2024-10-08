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
margin-top: ${(props)=>(props.asunto ? '50px' : '0px')};
`

export const InputStyled = styled.input`
position: relative;
width: ${(props)=>(props.asunto ? '500px' : '300px')};
height: ${(props)=>(props.asunto ? '140px' : '20px')};
padding: 10px;
border-top: none;
border-right: none;
border-left: none;
border-bottom: 1px solid ${(props)=>(props.register || props.login ? '#cfcfcf' : 'black')}; 
background-color: transparent;
color: ${(props)=>(props.register || props.login ? 'white' : 'black')};
&::placeholder{
    color: grey;
    position: absolute;
    top: 13px;
}
`

export const ErrorMessageStyled = styled.span`
  margin-top: 5px;
  color: red;
  font-size: 12px;`