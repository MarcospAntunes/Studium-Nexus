"use client"

import { BackToTop, Header, Navigation } from "@/components";
import { AppContainer, PageFormulaContainer } from "@/containers";
import { formulasPages } from "@/utils";

function Formula({ params }: { params: { slug: string } }): JSX.Element {
    const slug: string = params.slug;
    const { title, Page } = formulasPages[slug];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        if(section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <AppContainer>
            <Header menu={true} />
            <PageFormulaContainer>
                <h1>Fórmula de {title.replace('-', ' ')}</h1>
                <Navigation>
                    <a onClick={() => scrollToSection('como-foi-criada')}  href="#">Como foi criada</a>
                    <a onClick={() => scrollToSection('passo-a-passo')}  href="#">Como chegar no resultado</a>
                </Navigation>
                <Page />
            </PageFormulaContainer>
            <BackToTop />
        </AppContainer>
    )
}

export default Formula;