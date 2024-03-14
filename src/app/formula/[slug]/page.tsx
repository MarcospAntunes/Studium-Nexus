"use client"

import GlobalStyles from "@/GlobalStyles";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import { BackToTop, Header, Navigation } from "@/components";
import { AppContainer, FormulaContainer } from "@/containers";
import { formulasPages } from "@/utils";

function Formula({ params }: { params: { slug: string } }): JSX.Element {
    const slug: string = params.slug;
    const CurrentPage: () => JSX.Element = formulasPages[slug]

    const { theme } = useTheme();
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
                <FormulaContainer>
                    <h1>Fórmula de {title}</h1>
                    <Navigation>
                        <a onClick={() => scrollToSection('como-foi-criada')}  href="#">Como foi criada</a>
                        <a onClick={() => scrollToSection('passo-a-passo')}  href="#">Como chegar no resultado</a>
                    </Navigation>
                    <CurrentPage />
                </FormulaContainer>
                <BackToTop />
            </AppContainer>
        </>
    )
}

export default Formula;