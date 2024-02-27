import { useContext } from "react";
import { ThemeContext } from "@/contexts/@index";

function useTheme() {
    const { theme, setTheme, themeToggler }: any = useContext(ThemeContext);

    return {
        theme,
        setTheme,
        themeToggler
    }
}   

export default useTheme;