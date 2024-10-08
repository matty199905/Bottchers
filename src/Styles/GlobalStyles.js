import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html{
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
    display: none;
  
  }
  }

    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: black;
    color: white;
    overflow-x: hidden;
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }`