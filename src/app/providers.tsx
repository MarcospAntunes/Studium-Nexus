"use client"

import { ThemeProvider } from "@/contexts/@index";

function Providers({ children }: any) {
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Providers;