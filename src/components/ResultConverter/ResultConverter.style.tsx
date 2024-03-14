import styled from "styled-components";

const ResultConverterStyled = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    font-size: 14px;
    text-align: center;
    word-break: break-all;
    padding: 20px;
    border-radius: 15px;
    background-color: ${({theme}) => theme.body};
    transition: .3s;

    @media screen and (min-width: 541px) {
        max-width: 350px;
        font-size: 16px;
    }
`

export default ResultConverterStyled;