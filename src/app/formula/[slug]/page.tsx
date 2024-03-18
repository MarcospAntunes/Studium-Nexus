import { BackToTop, Header, Navigation } from "@/components";
import { AppContainer, PageFormulaContainer } from "@/containers";
import { formulasPages } from "@/utils";

function Formula({ params }: { params: { slug: string } }): JSX.Element {
    const slug: string = params.slug;
    const { title, Page } = formulasPages[slug];

    return (
        <AppContainer>
            <Header menu={true} />
            <PageFormulaContainer>
                <h1>Fórmula de {title.replace('-', ' ')}</h1>
                <Navigation />
                <Page />
            </PageFormulaContainer>
            <BackToTop />
        </AppContainer>
    )
}

export default Formula;