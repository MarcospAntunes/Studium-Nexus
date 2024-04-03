"use client"

import styled from "styled-components";

const ConverterContainerStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    width: 350px;
    height: 220px;
    padding: 10px;
    border-radius: 15px;

    background-color: ${({ theme }) => theme.bgConverter};
    box-shadow: -2px 2px 4px 1px ${({ theme }) => theme.shadown};
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.text};
    transition: .3s;

    & .divConversao {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        
    }

    & .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        

        & .divConversao {
            display: flex;
            gap: 30px;
        }

        & img {
            width: 64px;
            height: 64px;
            filter: invert(${({ theme }) => theme.invert});
        }

        & .convertido {
            filter: invert(0);
        }
    }

    .botoes {
        gap: 5px;
    }

    @media screen and (min-width: 541px) {
        width: 45vw;
        height: 350px;
        font-size: 16px;
    }
`

export default ConverterContainerStyled;