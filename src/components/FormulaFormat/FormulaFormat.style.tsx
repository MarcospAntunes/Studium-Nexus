import styled from "styled-components";

const FormulaFormatStyled = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .indentFormula {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        text-align: center;
        text-indent: 0;
        & span {
            width: 200px;
        }
    
        & .divider {
            border-top: 1px solid ${({theme}) => theme.text};
        }
    }

`

export default FormulaFormatStyled;