"use client"

import useTheme from "@/hooks/useTheme";
import { darkTheme, lightTheme } from "@/themes";
import styled from "styled-components";

const AppContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.body};
    transition: .3s;
`

function AppContainer({children}: any) {
    const { theme } = useTheme();
    return(
        <AppContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </AppContainerStyled>
    )
}

export default AppContainer;
