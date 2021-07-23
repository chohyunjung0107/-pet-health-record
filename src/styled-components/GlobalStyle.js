import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, *{
    /* width: 1920px; */
    padding:0; 
    margin:0;
    box-sizing: border-box;
  }
  a { 
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    color: #000;

    ${(props) =>
      props.white &&
      css`
        color: #000;
      `}

    &:link {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
`;
