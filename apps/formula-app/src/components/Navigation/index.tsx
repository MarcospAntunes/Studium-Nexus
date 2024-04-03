"use client"

import { useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import NavigationStyled from "./Navigation.style";

function Navigation(): JSX.Element {
    const { theme } = useTheme();

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <NavigationStyled theme={theme === "light" ? lightTheme : darkTheme}>
            <a onClick={() => scrollToSection('como-foi-criada')} href="#">Como foi criada</a>
            <a onClick={() => scrollToSection('passo-a-passo')} href="#">Como chegar no resultado</a>
        </NavigationStyled>
    )
}

export default Navigation;