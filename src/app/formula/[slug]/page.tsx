"use client"

import GlobalStyles from "@/GlobalStyles";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import { useFormulaReducer } from "@/hooks";
import { BackToTop, Header, Navigation } from "@/components";
import { AppContainer, FormulaContainer } from "@/containers";

function Formula({ params }: { params: { slug: string } }): JSX.Element {
    const slug = params.slug;
    const { theme } = useTheme();
    const {Component} = useFormulaReducer();
    const title = slug.charAt(0).toUpperCase() + slug.slice(1);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        if(section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme}/>
            <AppContainer>
                <Header menu={true} />
                
                <FormulaContainer theme={theme === "light" ? lightTheme : darkTheme}>
                    <h1>Fórmula de {title}</h1>
                    <Navigation theme={theme === "light" ? lightTheme : darkTheme}>
                        <a onClick={() => scrollToSection('como-foi-criada')}  href="#">Como foi criada</a>
                        <a onClick={() => scrollToSection('passo-a-passo')}  href="#">Como chegar no resultado</a>
                    </Navigation>
                    {Component}
                </FormulaContainer>
                <BackToTop />
            </AppContainer>
        </>
    )
}

export default Formula;