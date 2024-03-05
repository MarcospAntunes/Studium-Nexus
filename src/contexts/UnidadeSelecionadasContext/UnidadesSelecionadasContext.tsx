import UnidadesSelecionadasProps from "@/hooks/useUnidadesSelecionadasContext/useUnidadesSelecionadasContext.type";
import Children from "@/types/children.type";
import { createContext, useState } from "react";

const UnidadeSelecionadaContext = createContext<UnidadesSelecionadasProps | any>("");
UnidadeSelecionadaContext.displayName = "UnidadeSelecionada";

function UnidadeSelecionadaProvider ({ children }: Children) {
    const [unidade, setUnidade] = useState<string[]>([]);

    return(
        <UnidadeSelecionadaContext.Provider value={{unidade, setUnidade}}>
            {children}
        </UnidadeSelecionadaContext.Provider>
    )
}

export { UnidadeSelecionadaContext, UnidadeSelecionadaProvider }
