import { motion } from "framer-motion"
import styled from "styled-components"

export const FiltersContainer = styled(motion.div)`
position: absolute;
top: 78px;
left: 0;
width: 300px;
height: 100.4%;
background-color:rgb(23, 23, 23);
border-right: 2px solid grey;
border-bottom: 2px solid grey;
padding: 0px;
z-index: 100;
`


export const FilterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
h3{
   font-weight:600px ;
   font-size: 17px;
   margin: 50px 0 0 40px;
   color: white
}
ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
    li{
        font-weight: 400;
        font-size: 15px;
        border: none;
        background-color: transparent;
        color: white;
        cursor: pointer;
        transition: all ease .2s;
        &:hover{
            color: orange;
            font-weight: 500;
            transform: scale(1.1);
            transition: all ease .2s;
        }
    }
}
`

export const ActiveFiltersContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
flex-flow: row wrap;
width: 87%;
height: 60px;
padding: 20px;
border-bottom: 1px solid grey;
/* display: none; */
`