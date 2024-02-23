import styled from "styled-components";

const InputConversorStyled = styled.input`
    font-family: inherit;
    font-size: 14px;
    border: none;
    border-radius: 15px;

    width: 230px;
    padding: 8px;
    background-color: ${({theme}) => theme.bgInput};
    color: ${({theme}) => theme.text};
    transition: .3s;

    &:focus {
        outline: none;
    }
`

export default InputConversorStyled;