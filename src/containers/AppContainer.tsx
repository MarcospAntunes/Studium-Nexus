"use client"

import useTheme from "@/hooks/useTheme";
import AppContainerStyled from "@/styles/AppContainer.style";
import { darkTheme, lightTheme } from "@/themes";

function AppContainer({children}: any) {
    const { theme } = useTheme();
    return(
        <AppContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </AppContainerStyled>
    )
}

export default AppContainer;
