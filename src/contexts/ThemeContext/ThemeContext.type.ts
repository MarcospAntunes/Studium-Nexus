import { Dispatch, SetStateAction } from "react";

type ThemeContextProps = {
    themeToggler: (target: string) => void 
    theme: string 
    setTheme: Dispatch<SetStateAction<string>>
}

export default ThemeContextProps;