"use client"

import styled from "styled-components";

const LabelFileInputStyled = styled.label`
    background-color: ${({ theme }) => theme.bgCard};
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 15px;
    width: 100%;
    max-width: 300px;
    padding: 5px;
    font-family: inherit;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: ${({ theme }) => theme.bgCardHover};
        color: ${({ theme }) => theme.textHover};
        border-color: ${({ theme }) => theme.textHover};
    }
    
    & input[type="file"] {
        display: none;
    }
    
    @media screen and (min-width: 541px) {
        font-size: 18px;
    }
`

export default LabelFileInputStyled;