import { motion } from "framer-motion"
import styled from "styled-components"

export const FiltersContainer = styled(motion.div)`
position: absolute;
top: 80px;
left: 0;
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
height: 180px;
background-color: whitesmoke;
border-bottom: 0.5px solid black;
padding: 20px 0px;
z-index: 90;
`


export const FilterContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
margin-left: -10px;
h3{
   font-weight:600px ;
   font-size: 17px;
   margin: 15px -15px 0 80px;
}
ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 7px;
    li{
        font-size: 16px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: all ease .2s;

     
    }
}
`

export const LiContainer = styled.div`
 //selectedfilter
 color: ${(props)=>(props.activeFilter === true ? 'orange': 'black') } ;
 font-weight: ${(props)=>(props.activeFilter === true ? '500': '400' )} ;
 transform: ${(props)=>(props.activeFilter  === true ? 'scale(1.05)': 'scale(1)')} ;
 transition: all ease .2s;
 &:hover{
            color: orange;
            font-weight: 500;
            transform: ${(props)=>(props.activeFilter === true ? 'scale(1.05)': 'scale(1.15)')} ;
            transition: all ease .2s;
          
        }
`



