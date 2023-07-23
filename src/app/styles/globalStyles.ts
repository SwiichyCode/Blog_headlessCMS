import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body  {
        font-family: 'Manrope', sans-serif;
        color: #F4F4F4;
        font-size: 1.4em;
    }

    :root {
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
    }
`;
