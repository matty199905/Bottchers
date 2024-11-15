import { motion } from "framer-motion"
import styled from "styled-components"

export const FiltersContainer = styled(motion.div)`
position: absolute;
top: 80px;
left: 0;
display: flex;
justify-content: center;
align-items: flex-start;
flex-flow: row nowrap;
gap: 70px;
width: 100vw;
height: 180px;
background-color: whitesmoke;
border-bottom: 0.5px solid black;
padding: 20px 0px;
z-index: 90;
@media ( max-width: 1360px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 300px;
    height: 1000px;
    top: 80px;
    padding: 0px 30px 80px 30px;
    z-index: 50
}
`


export const FilterContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
h3{
   font-weight:600px ;
   font-size: 17px;
   margin: 15px -15px 0 0px;
   @media ( max-width: 1360px) {
width: 100px;
}

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



