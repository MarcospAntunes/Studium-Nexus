"use client"

import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import AppContainerStyled from "./AppContainer.style";
import Children from "@/types/children.type";

function AppContainer({children}: Children): JSX.Element {
    const { theme } = useTheme();
    return(
        <AppContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </AppContainerStyled>
    )
}

export default AppContainer;
