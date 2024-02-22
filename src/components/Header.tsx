/* eslint-disable @next/next/no-img-element */
"use client"

import styled, { StyleSheetManager } from "styled-components";
import MenuMobile from "./MenuMobile";
import { HeaderStyledProps } from "@/types";
import useTheme from "@/hooks/useTheme";
import { darkTheme, lightTheme } from "@/themes";

const HeaderStyled = styled.header<HeaderStyledProps>`
    @font-face {
        font-family: 'NicoMoji';
        src: url('../../fonts/NicoMoji-Regular.ttf') format('truetype');
    }

    display: flex;
    flex-direction: ${({ convertion }) => (convertion === "true" ? 'column' : 'row')};
    justify-content: center;
    align-items: center;
    gap: 5px;

    font-family: 'NicoMoji', sans-serif;
    text-align: center;

    & img {
        width: 42px;
        height: 42px;
        cursor: pointer;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & div {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }
    }
`

const LineStyled = styled.hr`
    width: 100%;
    height: 1px;
    margin-bottom: 30px;
    border: none;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.text};
`

function Header({ convertion = false }) {
    const { theme, themeToggler } = useTheme();
    const handleThemeToggle = (target: string) => {
        themeToggler(target)
    }
    const invertTheme = theme === "dark" ? "light" : "dark"
    const source = theme === "light" ? "sol.png" : "lua.png"

    if(convertion) {
        return(
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'convertion'}>
                <HeaderStyled convertion={convertion.toString()}>
                    <div>
                        <h1>FC</h1>
                        <div>
                            <img src={`../../images/icons/${source}`} alt="change theme" onClick={() => handleThemeToggle(invertTheme)}/>
                            <MenuMobile />
                        </div>
                    </div>
                    <LineStyled theme={theme === "light" ? lightTheme : darkTheme} />
                </HeaderStyled> 
            </StyleSheetManager>
        )
            
    } else {
        return(
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'convertion'}>
                <HeaderStyled convertion={convertion.toString()}>
                    <span></span>
                    <h1>Fast Converter</h1>
                    <img src={`../../images/icons/${source}`} alt={`${theme} theme`} onClick={() => handleThemeToggle(invertTheme)}/>
                </HeaderStyled>
            </StyleSheetManager>
            
        )
    }
}

export default Header;