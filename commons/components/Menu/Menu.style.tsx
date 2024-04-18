"use client"

import MenuStyledProps from "./Menu.style.type";
import styled from "styled-components";

const MenuStyled = styled.nav<MenuStyledProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100vw;
  height: 100vh;
  top: 0;
  right: ${({ isopen }) => (isopen === "true" ? '0' : '-100vw')};
  font-family: inherit;

  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  z-index: 2;
  transition: right .3s ease-in-out;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }

  .active {
    text-decoration: underline !important;
  }
`
export default MenuStyled;
