import styled from "styled-components";


export const AboutUsWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: 2000px;
`

export const AboutUsVideoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const AboutUsVideo = styled.video`
display: flex;
align-items: center;
justify-content: center;
    height: 100vh;
    width: 100%;
    margin-top: -25px;
    z-index: 0;
`

export const TitleContainer = styled.h1`
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

export const IconStyled = styled.div`
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

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100vw;
`

export const Aside = styled.div`
display: flex;
justify-content: flex-start;
padding-left: 50px;
width: 30%;
margin-bottom: 80px;

span{
font-size:20px;
width: 100px;
font-style:oblique;}
`

export const SubtitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 70%;

h2{ margin: 50px 0px 0px ;
    font-size: 46px;
    font-weight: 400;
    font-style: oblique;
    letter-spacing: 2px;
    opacity: 0.9;
    border-bottom: 1px solid white;
    padding-bottom: 30px;
    }
`

export const Subtitle = styled.p`
text-align: left;
font-size: 24px;
font-style:oblique;
font-weight: 300;
width: 94%;
`

export const ParagraphContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 50px;
width: 92%;
p{
    font-size:18px;
    font-style: oblique;
    font-weight: 500;
    width: 50%;
}
`

export const IconsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 83vw;
margin-top: 120px;
`

export const IconContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3{margin: 0px;
    }
span{

    }

`

export const AboutIconStyled = styled.div`
font-size: 50px;
color: ${( props => props.orange ? "orangered" : "white")};
`
