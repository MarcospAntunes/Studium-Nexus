"use client"

import styled from "styled-components";

const BhaskaraSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    text-align: justify;
    text-indent: 10px;

    & h3 {
        font-size: 20px;
        text-align: center;
        text-indent: 0;
        width: 100%;
        margin: 0;
    }
    
    & ol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        max-width: 700px;
        text-align: left;
        list-style-position: inside;

        & li {
            width: 100%;
            text-indent: 0;
            font-size: 14px;
        }

        & ul {
            padding-left: 20px;
        }
    }

    & span {
        font-size: 14px;
    }
    
    & p {
        max-width: 700px;
    }

    & .explantion {
        text-align: left;
    }

    & .formula {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    & .formulaContent {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        & .container {
            display: flex;
        }

        & .fraction {
            display: flex;
            flex-direction: column;

            & .divider {
                border-top: 1px solid ${({ theme }) => theme.text};
            }
        }
    }

    @media screen and (min-width: 541px) {
        & span, ol li { 
            font-size: 16px;
        }
    }

`

export default BhaskaraSection;