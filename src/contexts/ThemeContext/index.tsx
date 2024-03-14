import { createContext, useState } from "react";
import ThemeContextProps from "./ThemeContext.type";
import Children from "@/types/children.type";

const ThemeContext = createContext<ThemeContextProps | any>("light");
ThemeContext.displayName = "Theme";

function ThemeProvider({children}: Children): JSX.Element {
    const themeToggler = (target?: string) => {
        target === "light" ? setTheme("light") : setTheme("dark");
    }
    const [theme, setTheme] = useState<string>("light");

    return(
        <ThemeContext.Provider value={{themeToggler, theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };