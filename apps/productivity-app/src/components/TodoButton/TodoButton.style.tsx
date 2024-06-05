"use client";

import styled from "styled-components";

type TodoButtonStyledProps = {
  checked: string;
};

const TodoButtonStyled = styled.button<TodoButtonStyledProps>`
  background-color: ${({ checked }) =>
    checked !== "checked" ? "transparent" : "#90ee90"};
  background-image: ${({ checked }) =>
    checked !== "checked" ? "none" : "url(/icons/check-icon.png)"};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.buttonTudo};
  border-radius: 50%;
  width: 25px !important;
  height: 25px !important;
  cursor: pointer;
`;

export default TodoButtonStyled;