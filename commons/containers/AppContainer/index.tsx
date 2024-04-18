"use client"

import { useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "../../utils";
import AppContainerStyled from "./AppContainer.style";
import { Children } from "../../types";
import React from "react";

function AppContainer({ children }: Children): JSX.Element {
  const { theme } = useTheme();
  return (
    <AppContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </AppContainerStyled>
  )
}

export default AppContainer;
