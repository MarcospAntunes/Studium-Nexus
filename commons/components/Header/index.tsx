/* eslint-disable @next/next/no-img-element */

"use client";

import { StyleSheetManager } from "styled-components";
import { useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "../../utils";
import { HeaderStyled, LineStyled } from "./Header.style";
import { Menu, TitleNicoMoji } from "../index";
import React from "react";
import { useRouter } from "next/navigation";

function Header({ menu = false }): JSX.Element {
  const { theme, themeToggler } = useTheme();
  const handleThemeToggle = (target: string) => {
    themeToggler(target);
  };
  const { push } = useRouter();
  const invertTheme: string = theme === "dark" ? "light" : "dark";
  const source: string = theme === "light" ? "sol.png" : "lua.png";

  if (menu) {
    return (
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "menu"}>
        <HeaderStyled menu={menu.toString()}>
          <div>
            <TitleNicoMoji onClick={() => push("/")} nav="true">
              SN
            </TitleNicoMoji>
            <div>
              <img
                src={`/icons/${source}`}
                alt="change theme"
                onClick={() => handleThemeToggle(invertTheme)}
                role="button"
              />
              <Menu />
            </div>
          </div>
          <LineStyled theme={theme === "light" ? lightTheme : darkTheme} />
        </HeaderStyled>
      </StyleSheetManager>
    );
  } else {
    return (
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "menu"}>
        <HeaderStyled menu={menu.toString()}>
          <span></span>
          <TitleNicoMoji>Studium Nexus</TitleNicoMoji>
          <img
            src={`/icons/${source}`}
            alt={`${theme} theme`}
            onClick={() => handleThemeToggle(invertTheme)}
            role="button"
          />
        </HeaderStyled>
      </StyleSheetManager>
    );
  }
}

export default Header;
