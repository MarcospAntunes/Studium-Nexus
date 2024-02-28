"use client"

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body { 
        background-color: ${({theme}) => theme.body};
        transition: .3s;
    }

    p {
        font-size: 14px;
    }

    @media screen and (min-width: 541px) {
        p {
            font-size: 16px;
        }

        h2 {
            font-size: 22px;
        }

        h3 {
            font-size: 18px;
        }
    }
`

export default GlobalStyles;