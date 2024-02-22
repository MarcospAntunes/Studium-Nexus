"use client"

import { darkTheme, lightTheme } from "@/themes";
import useTheme from "@/hooks/useTheme";
import { ThemeProvider } from "@/contexts/ThemeContext";

function Providers({ children }: any) {
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Providers;