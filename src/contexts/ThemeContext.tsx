import { ReactNode, createContext, useState } from "react";

const ThemeContext = createContext<any>({});
ThemeContext.displayName = "Theme";

function ThemeProvider({children}: any) {
    const themeToggler = (target?: string) => {
        target === "light" ? setTheme("light") : setTheme("dark");
    }
    const [theme, setTheme] = useState("light");

    return(
        <ThemeContext.Provider value={{themeToggler, theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };