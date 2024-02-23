"use client"

import { UnidadeSelecionadaProvider } from "@/contexts/@index";

function Providers({ children }: any) {
    return(
        <UnidadeSelecionadaProvider>
            {children}
        </UnidadeSelecionadaProvider>
    )
}

export default Providers;