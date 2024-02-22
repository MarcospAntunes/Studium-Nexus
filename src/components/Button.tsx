import styled from "styled-components";

const Button = styled.button`
    background-color: ${({theme}) => theme.bgCard};
    border: 1px solid ${({theme}) => theme.text};
    border-radius: 15px;
    width: 100px;
    padding: 5px;
    font-family: inherit;
    font-size: 14px;
    color: ${({theme}) => theme.text};
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: ${({theme}) => theme.bgCardHover};
        color: ${({theme}) => theme.textHover};
        border-color: ${({theme}) => theme.textHover};
    }
`

export default Button;