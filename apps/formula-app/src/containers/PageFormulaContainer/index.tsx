"use client";

import { useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import { Children } from "@studium-nexus/types-commons";
import PageFormulaContainerStyled from "./PageFormulaContainer.style";

function PageFormulaContainer({ children }: Children): JSX.Element {
  const { theme } = useTheme();
  return (
    <PageFormulaContainerStyled
      theme={theme === "light" ? lightTheme : darkTheme}
    >
      {children}
    </PageFormulaContainerStyled>
  );
}

export default PageFormulaContainer;
