"use client"

import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import AppContainerStyled from "./AppContainer.style";

function AppContainer({children}: any) {
    const { theme } = useTheme();
    return(
        <AppContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </AppContainerStyled>
    )
}

export default AppContainer;
