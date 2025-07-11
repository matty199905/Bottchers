import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }
  
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Lato';
    background-color: whitesmoke;
    color: black;
    overflow-x: hidden;

       a {
    text-decoration: none;
    color: white;
    &&:visited {
    color: white;
    }
    }

    li {
    list-style: none;
    
    }

    
    }`


