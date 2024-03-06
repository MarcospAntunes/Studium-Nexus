import { useContext } from "react";
import { UnitSelectedContext } from "@/contexts";
import UnitSelectedContextProps from "./useUnidadesSelecionadasContext.type";

function useUnitsSelectedContext() {
    const { unit, setUnit }: UnitSelectedContextProps = useContext(UnitSelectedContext);

    return {
        unit, setUnit
    }
    
}

export default useUnitsSelectedContext;