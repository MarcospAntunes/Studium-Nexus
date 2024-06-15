"use client";

import TodoButtonStyled from "./TodoButton.style";
import { StyleSheetManager } from "styled-components";
import { TodoButtonProps } from "./TodoButton.type";
import { useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";

function TodoButton({
  onClick,
  checked = "active",
}: TodoButtonProps): JSX.Element {
  const { theme } = useTheme();
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "checked"}>
      <TodoButtonStyled
        theme={theme === "light" ? lightTheme : darkTheme}
        onClick={onClick}
        checked={checked.toString()}
        role="button"
      />
    </StyleSheetManager>
  );
}

export default TodoButton;
