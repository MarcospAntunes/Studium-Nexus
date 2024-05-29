"use client";

import { StyleSheetManager } from "styled-components";
import { useChangeLayoutContext, useTheme } from "../../hooks/index";
import ChangeLayoutStyled from "./ChangeLayout.style";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";

function ChangeLayout() {
  const { layout, setLayout } = useChangeLayoutContext();
  const { theme } = useTheme();

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "layout"}>
      <ChangeLayoutStyled
        onClick={() => setLayout(!layout)}
        theme={theme === "light" ? lightTheme : darkTheme}
        layout={layout?.toString()}
        title="Clique aqui para mudar o layout dos itens"
        role="button"
      >
        <div className="first" />
        <div className="second" />
        <div className="third" />
        <div className="last" />
      </ChangeLayoutStyled>
    </StyleSheetManager>
  );
}

export default ChangeLayout;
