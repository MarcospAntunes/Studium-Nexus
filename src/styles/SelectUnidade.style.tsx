import styled from "styled-components"

const SelectStyled = styled.select`
    border: none;
    border-radius: 15px;
    width: 120px;
    padding: 8px;
    font-family: inherit;
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: .3s;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`

export default SelectStyled;