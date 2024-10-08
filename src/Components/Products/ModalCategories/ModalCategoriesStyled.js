import { motion } from "framer-motion"
import styled from "styled-components"

export const FiltersContainer = styled(motion.div)`
position: absolute;
top: 785px;
left: 0;
width: 300px;
height: 1000px;
background-color: black;
border-right: 1px solid white;
padding: 0px;
`


export const FilterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
h3{
   font-weight:600px ;
   font-size: 16px;
   margin-left: 40px;
   margin-bottom: 0px;
}
ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
    li{
        font-weight: 100;
        font-size: 14px;
        border: none;
        background-color: transparent;
        color: white;
        cursor: pointer;
        transition: all ease .2s;
        &:hover{
            color: orange;
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
height: 40px;
padding: 20px;

`