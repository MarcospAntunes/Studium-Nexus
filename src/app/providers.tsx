"use client"

import { ThemeProvider, SearchProvider } from "@/contexts/@index";

function Providers({ children }: any) {
    return(
        <ThemeProvider>
            <SearchProvider>
                {children}
            </SearchProvider>
        </ThemeProvider>
    )
}

export default Providers;