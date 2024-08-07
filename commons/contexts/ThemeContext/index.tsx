"use client";

import React, { createContext, useState } from "react";
import ThemeContextProps from "./ThemeContext.type";
import { Children } from "../../types";
import GlobalStyles from "./GlobalStyles";
import { darkTheme, lightTheme } from "../../utils";

const ThemeContext = createContext<ThemeContextProps | any>("light");
ThemeContext.displayName = "Theme";

function ThemeProvider({ children }: Children): JSX.Element {
  const themeToggler = (target?: string) => {
    target === "light" ? setTheme("light") : setTheme("dark");
  };
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ themeToggler, theme, setTheme }}>
      <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
