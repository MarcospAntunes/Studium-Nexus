"use client"

import { UnidadeSelecionadaProvider } from "@/contexts/UnidadesSelecionadasContext";

function Providers({ children }: any) {
    return(
        <UnidadeSelecionadaProvider>
            {children}
        </UnidadeSelecionadaProvider>
    )
}

export default Providers;