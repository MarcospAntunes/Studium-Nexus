/* eslint-disable @next/next/no-img-element */
"use client"

import styled, { StyleSheetManager } from "styled-components";
import MenuMobile from "./MenuMobile";
import { HeaderStyledProps } from "@/types";

const HeaderStyled = styled.header<HeaderStyledProps>`
    @font-face {
        font-family: 'NicoMoji';
        src: url('../../fonts/NicoMoji-Regular.ttf') format('truetype');
    }

    display: flex;
    flex-direction: ${({ convertion }) => (convertion === "true" ? 'column' : 'row')};
    gap: 5px;

    font-family: 'NicoMoji', sans-serif;
    text-align: center;

    & img {
        width: 64px;
        height: 64px;
    }

    & div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`

const LineStyled = styled.hr`
    width: 100%;
    height: 1px;
    margin-bottom: 30px;
    border: none;
    color: black;
    background-color: black;
`

function Header({ convertion = false }) {
    if(convertion) {
        return(
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'convertion'}>
                <HeaderStyled convertion={convertion.toString()}>
                    <div>
                        <h1>FC</h1>
                        <MenuMobile />
                    </div>
                    <LineStyled />
                </HeaderStyled> 
            </StyleSheetManager>
        )
            
    } else {
        return(
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'convertion'}>
                <HeaderStyled convertion={convertion.toString()}>
                    <span></span>
                    <h1>Fast Converter</h1>
                    <img src="../../images/icons/light-theme/sol.png" alt="" />
                </HeaderStyled>
            </StyleSheetManager>
            
        )
    }
}

export default Header;