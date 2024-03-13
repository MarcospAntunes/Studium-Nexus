import styled from "styled-components";

const FormulaScreenSkeletonSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    text-align: justify;
    text-indent: 10px;

    h2 {
        width: 300px;
        height: 20px;
        background-color: hsl(0, 0%, 80%);
        animation: skeleton-loading 1s linear infinite alternate;
    }

    p {
        max-width: 700px;
        width: 200px;
        height: 10px;
        background-color: hsl(0, 0%, 80%);
        animation: skeleton-loading 1s linear infinite alternate;
    }

    .inputsArea {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;

        & div {
            border-radius: 15px;
            width: 60px;
            height: 34px;
            background-color: hsl(0, 0%, 80%);
            animation: skeleton-loading 1s linear infinite alternate;
        }
    }

    .formulaArea {
        width: auto;
        min-width: 200px;
        max-width: 700px;
        height: 40px;
        background-color: hsl(0, 0%, 80%);
        animation: skeleton-loading 1s linear infinite alternate;
    }

    .buttonArea {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 40px;

        & div {
            border-radius: 15px;
            width: 100%;
            height: 40px;
            background-color: hsl(0, 0%, 80%);
            animation: skeleton-loading 1s linear infinite alternate;
    
            @media screen and (min-width: 541px) {
                max-width: 300px;
                font-size: 18px;
            }
        }
    }

    .bigTextArea {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 5px;
        width: 100%;

        & p {
            width: 100%;

            &:first-child {
                width: calc(100% - 10px);
                margin-left: 10px;
            }

            &:nth-child(even) {
                width: calc(100% - 50px);
            }

            &:last-child {
                width: calc(100% - 100px);
            }
        }
    }

    .imgArea {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;

        & div {
            width: 50px;
            height: 50px;
            background-color: hsl(0, 0%, 80%);
            animation: skeleton-loading 1s linear infinite alternate;
        }
    }

    @media screen and (min-width: 541px) {
        p {
            max-width: none !important;
            height: 15px;
        }

        .imgArea {
            height: 100px;

            & div {
                width: 100px;
                height: 100px;
            }
        }
    }

    @keyframes skeleton-loading {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0.2;
        }
    }
`

export default FormulaScreenSkeletonSection;