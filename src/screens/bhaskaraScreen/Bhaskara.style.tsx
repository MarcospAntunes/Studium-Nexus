import styled from "styled-components";

const BhaskaraSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;

    & h2 {
        font-size: 20px;
        width: 300px;
        margin: 0;
    }
    
    & ol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        max-width: 700px;
        text-align: left;
        list-style-position: inside;

        & li {
            font-size: 14px;
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
    }

    & .botoes {
        width: 100%;
    }

    @media screen and (min-width: 541px) {
        & span, ol li { 
            font-size: 16px;
        }
    }

`

export default BhaskaraSection;