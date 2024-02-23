import HeaderStyledProps from "@/types/HeaderStyledType"
import styled from "styled-components"

const HeaderStyled = styled.header<HeaderStyledProps>`
    @font-face {
        font-family: 'NicoMoji';
        src: url('../../fonts/NicoMoji-Regular.ttf') format('truetype');
    }

    display: flex;
    flex-direction: ${({ convertion }) => (convertion === "true" ? 'column' : 'row')};
    justify-content: center;
    align-items: center;
    gap: 5px;

    font-family: 'NicoMoji', sans-serif;
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
`

const LineStyled = styled.hr`
    width: 100%;
    height: 1px;
    margin-bottom: 30px;
    border: none;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.text};
`

export { HeaderStyled, LineStyled }