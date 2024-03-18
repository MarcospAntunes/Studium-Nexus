"use client"

import styled from "styled-components"

const SelectStyled = styled.select`
    border: none;
    border-radius: 15px;
    width: 95%;
    padding: 8px;
    font-family: inherit;
    font-size: 14px;
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: .3s;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    @media screen and (min-width: 541px) {
        font-size: 16px;
        max-width: 350px;
    }
`

export default SelectStyled;