import UnitSelectedContextProps from "@/hooks/useUnitsSelectedContext/useUnidadesSelecionadasContext.type";
import Children from "@/types/children.type";
import { createContext, useState } from "react";

const UnitSelectedContext = createContext<UnitSelectedContextProps | any>("");
UnitSelectedContext.displayName = "UnidadeSelecionada";

function UnitSelectedProvider ({ children }: Children) {
    const [unit, setUnit] = useState<string[]>([]);

    return(
        <UnitSelectedContext.Provider value={{unit, setUnit}}>
            {children}
        </UnitSelectedContext.Provider>
    )
}

export { UnitSelectedContext, UnitSelectedProvider }
