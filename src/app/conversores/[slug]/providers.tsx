"use client"

import { UnidadeSelecionadaProvider } from "@/contexts";

function Providers({ children }: any) {
    return(
        <UnidadeSelecionadaProvider>
            {children}
        </UnidadeSelecionadaProvider>
    )
}

export default Providers;