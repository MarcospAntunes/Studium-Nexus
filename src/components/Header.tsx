/* eslint-disable @next/next/no-img-element */
"use client"

import styled from "styled-components";
import MenuMobile from "./MenuMobile";

const HeaderStyled = styled.header`
    @font-face {
        font-family: 'NicoMoji';
        src: url('../../fonts/NicoMoji-Regular.ttf') format('truetype');
    }

    display: flex;
    flex-direction: column;
    gap: 5px;

    font-family: 'NicoMoji', sans-serif;
    text-align: center;

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
            <>
                <HeaderStyled>
                    <div>
                        <h1>FC</h1>
                        <MenuMobile />
                    </div>
                    <LineStyled />
                </HeaderStyled> 
            </>
            
        )
    } else {
        return(
            <HeaderStyled>
                <span></span>
                <h1>Fast Converter</h1>
                <img src="../../images/icons/light-theme/sol.png" alt="" />
            </HeaderStyled>
        )
    }
}

export default Header;