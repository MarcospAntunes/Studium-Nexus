import { useTheme } from "../../hooks";
import ButtonStyled from "./Button.style";
import ButtonProps from "./Button.type";
import { darkTheme, lightTheme } from "../../utils";
import React from "react";

function Button({ children, onClick, role, type }: ButtonProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <ButtonStyled
      onClick={onClick}
      theme={theme === 'light' ? lightTheme : darkTheme}
      role={role}
      type={type}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button;
