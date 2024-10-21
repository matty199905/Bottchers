import styled from "styled-components";


export const CategoriesContainer = styled.div`
display: grid;
margin: 35px 35px 0 0;
width: 92%;
height: 700px;
grid-template-columns: 33% 33% 33% ;
grid-template-rows: 20% 20% 20% 20% 20% 20%;
grid-gap: 20px;
`

export const Relax = styled.div`
display: grid;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
grid-column: 1/2;
grid-row: 1/4;
background-position: center;
background-size: 210%;
transition: all ease .7s;
cursor: pointer;
z-index: 100;
&:hover{
    background-size: 240%;
    transition: all ease .7s;
    filter: brightness(.8);
  
}
h3{

    color: white;
    opacity: 1;
    font-size: 45px;
    font-weight: 500;
    width: 300px;
    line-height: 50px;
   
}
`

export const CamasMultiposicion = styled(Relax)`
grid-column: 2/3;
grid-row: 1/5;
background-position: center;

`
export const Comedores = styled(Relax)`
grid-column: 3/4;
grid-row: 1/4;
`
export const MesasExtensibles = styled(Relax)`
grid-column: 1/2;
grid-row: 4/7;
`
export const SofásCama = styled(Relax)`
grid-column: 2/3;
grid-row: 5/7;
`
export const Living = styled(Relax)`
grid-column: 3/4;
grid-row: 4/7;
`