/* eslint-disable @next/next/no-img-element */
"use client"

import styled from "styled-components";
import sun from '../../public/icones/light-theme/sol.png'

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 10px;
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