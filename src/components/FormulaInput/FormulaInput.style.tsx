"use client"

import styled from "styled-components";

const FormulaInputStyled = styled.input`
    border: none;
    border-radius: 15px;

    width: ${({width}) => width}px;
    padding: 8px;
    background-color: ${({theme}) => theme.bgInput};
    font-family: inherit;
    font-size: 14px;
    text-align: center;
    color: ${({theme}) => theme.text};
    transition: .3s;

    &:focus {
        outline: none;
    }

    @media screen and (min-width: 541px) {
        font-size: 16px;
    }
`

export default FormulaInputStyled;