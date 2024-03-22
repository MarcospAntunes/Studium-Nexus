"use client"

import { useContext } from "react";
import { ThemeContext } from "@/contexts";
import ThemeContextProps from "@/contexts/ThemeContext/ThemeContext.type";

function useTheme() {
    const { theme, setTheme, themeToggler }: ThemeContextProps = useContext(ThemeContext);

    return {
        theme,
        setTheme,
        themeToggler
    }
}

export default useTheme;