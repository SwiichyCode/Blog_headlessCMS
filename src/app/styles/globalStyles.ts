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
        /* font-family: 'Inter', sans-serif; */
        font-family: 'Lexend', sans-serif;
        font-size: 1.4em;
    }

    :root {
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
    }
`;
