import styled from "styled-components";
import MenuStyledProps from "../Menu.style.type";

const MenuButton = styled.button<MenuStyledProps>`
    width: 42px;
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: nowrap;
    gap: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 9999;
    

    .lines {
        background-color: ${({theme}) => theme.text};
        border: 1px solid ${({theme}) => theme.text};
        border-radius: 15px;
        z-index: 3;
    }

    .line1 {
        width: ${({ isopen }) => (isopen === "true" ? '40px' : '35px')};
        transform: rotate(
            ${({ isopen }) => (isopen === "true" ? '45deg' : '0')}
        ) translate(
            ${({ isopen }) => (isopen === "true" ? '4px' : '0')}
        );
        transition: .3s ease-in-out;
    }

    .line2 {
        display: ${({ isopen }) => (isopen === "true" ? 'none' : 'block')};
       width: 30px;
       transition: .3s ease-in-out;
    }

    .line3 {
        width: 40px;
        transform: rotate(
            ${({ isopen }) => (isopen === "true" ? '-45deg' : '0')}
        ) translate(
            ${({ isopen }) => (isopen === "true" ? '4px' : '0')}
        );
        transition: .3s ease-in-out;
    }
`

export default MenuButton;