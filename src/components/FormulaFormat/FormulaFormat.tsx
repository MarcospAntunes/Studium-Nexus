import styled from "styled-components";

const FormulaFormat = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    text-indent: 0;

    span {
        width: 200px;
    }

    .divider {
        border-top: 1px solid ${({theme}) => theme.text};
    }
`

export default FormulaFormat;