"use client"

import styled from "styled-components"

const AppContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    gap: 30px;
    padding: 5px;
    text-align: center;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    transition: .3s;

    h2 {
        margin-bottom: 20px;
        text-align: center;
    }
`

export default AppContainerStyled;