"use client"

import GlobalStyles from "@/GlobalStyles";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import { useFormulaReducer } from "@/hooks";
import { Header } from "@/components";
import { AppContainer, FormulaContainer } from "@/containers";

function Formula({ params }: { params: { slug: string } }): JSX.Element {
    const slug = params.slug;
    const { theme } = useTheme();
    const {Component} = useFormulaReducer(slug);
    const title = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <>
            <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme}/>
            <AppContainer>
                <Header menu={true} />
                
                <FormulaContainer theme={theme === "light" ? lightTheme : darkTheme}>
                    <h1>Fórmula de {title}</h1>
                    {Component}
                </FormulaContainer>
            </AppContainer>
        </>
    )
}

export default Formula;