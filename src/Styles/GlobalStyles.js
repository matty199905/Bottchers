import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

  html{
    position: relative;
    scroll-behavior: smooth;
    width: 100vw;
    background-color: #2c2c2c;
  }


    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Lato';
    background-color: whitesmoke;
    color: black;
    overflow-x: hidden;
    }

    a {
    text-decoration: none;
    color: white;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }`