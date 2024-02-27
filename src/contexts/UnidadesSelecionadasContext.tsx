import UnidadesSelecionadasProps from "@/hooks/useUnidadesSelecionadasContext/useUnidadesSelecionadasContext.type";
import { createContext, useState } from "react";

const UnidadeSelecionadaContext = createContext<any>({});
UnidadeSelecionadaContext.displayName = "UnidadeSelecionada";

function UnidadeSelecionadaProvider ({ children }: any) {
    const [unidade, setUnidade] = useState<UnidadesSelecionadasProps>();

    return(
        <UnidadeSelecionadaContext.Provider value={{unidade, setUnidade}}>
            {children}
        </UnidadeSelecionadaContext.Provider>
    )
}

export { UnidadeSelecionadaContext, UnidadeSelecionadaProvider }
