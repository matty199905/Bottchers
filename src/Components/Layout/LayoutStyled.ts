import { styled } from 'styled-components'

export const LayoutWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
position: relative;
`

export const UpBtn = styled.div`
position: fixed;
bottom: 2vh;
left: 48vw;
font-size: 60px;
color: orange;
z-index: 500;
filter: drop-shadow(0px 0px 2px #535353);
cursor: pointer;
transition: all ease .2s;
&:hover{
    transform: scale(0.8, 1.2);
   
    transition: all ease .2s;
}
@media (max-width: 822px ) {
    display: none;
}
`