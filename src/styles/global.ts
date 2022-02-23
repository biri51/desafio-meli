import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #EEEEEE;
        --yellow: #FFE600;
        --darkgrey: #333333;
        --grey: #666666;
        --lightgrey: #999999;
        --button: #3483FA;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%
        }
        @media (max-width: 720px){
            font-size: 87.5%
        }
    }
`
