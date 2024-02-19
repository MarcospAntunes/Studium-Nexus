/* eslint-disable @next/next/no-img-element */
"use client"

import styled from "styled-components";

const HeaderStyled = styled.header`
    @font-face {
        font-family: 'NicoMoji';
        src: url('../../fonts/NicoMoji-Regular.ttf') format('truetype');
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'NicoMoji', sans-serif;
    text-align: center;
`

function Header() {
    return(
        <HeaderStyled>
            <span></span>
            <h1>Fast Converter</h1>
            <img src="../../images/icons/light-theme/sol.png" alt="" />
        </HeaderStyled>
    )
}

export default Header;