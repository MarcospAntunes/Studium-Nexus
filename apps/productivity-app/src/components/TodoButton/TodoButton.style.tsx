"use client";

import styled from "styled-components";
import { TodoButtonStyledProps } from "./TodoButton.type";

const TodoButtonStyled = styled.button<TodoButtonStyledProps>`
  background-color: ${({ checked }) =>
    checked !== "checked" ? "transparent" : "#90ee90"};
  background-image: ${({ checked }) =>
    checked !== "checked" ? "none" : "url(/icons/check-icon.png)"};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }: any) => theme.buttonTudo};
  border-radius: 50%;
  width: 25px !important;
  height: 25px !important;
  flex-shrink: 0;
  cursor: pointer;
`;

export default TodoButtonStyled;
