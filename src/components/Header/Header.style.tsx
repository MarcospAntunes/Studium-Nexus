"use client"

import HeaderStyledProps from "@/components/Header/Header.style.type"
import styled from "styled-components"

const HeaderStyled = styled.header<HeaderStyledProps>`
    display: flex;
    flex-direction: ${({ menu }) => (menu === "true" ? 'column' : 'row')};
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
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

    @media screen and (min-width: 541px) {
        justify-content: space-between;
    }
`

const LineStyled = styled.hr`
    width: 100%;
    height: 1px;
    margin-bottom: 30px;
    border: none;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.text};
`

export { HeaderStyled, LineStyled }