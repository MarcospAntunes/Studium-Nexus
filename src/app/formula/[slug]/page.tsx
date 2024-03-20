import { BackToTop, Header, Navigation } from "@/components";
import ExistingRoutes from "@/components/ExistingRoutes";
import { formulaRoutes } from "@/constants";
import { AppContainer, PageFormulaContainer } from "@/containers";
import { formulasPages } from "@/utils";

function Formula({ params }: { params: { slug: string } }): JSX.Element {
    const slug: string = params.slug;
    const { title, Page } = formulasPages[slug] || [null, null];

    return (
        <ExistingRoutes slug={slug} routes={formulaRoutes}>
            <AppContainer>
                <Header menu={true} />
                <PageFormulaContainer>
                    <h1>Fórmula de {title?.replace('-', ' ')}</h1>
                    <Navigation />
                    <Page />
                </PageFormulaContainer>
                <BackToTop />
            </AppContainer>
        </ExistingRoutes>
    )
}

export default Formula;