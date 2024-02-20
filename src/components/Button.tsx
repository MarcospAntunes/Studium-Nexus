import styled from "styled-components";

const Button = styled.button`
    background-color: #D9D9D9;
    border: 1px solid black;
    border-radius: 15px;
    width: 100px;
    padding: 5px;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #f0f0f0;
    }
`

export default Button;