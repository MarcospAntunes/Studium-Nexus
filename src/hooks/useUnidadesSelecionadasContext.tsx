import { useContext } from "react";
import { UnidadeSelecionadaContext } from "@/contexts/@index";
import { UnidadesSelecionadasProps } from "@/types/@index";

function useUnidadesSelecionadasContext() {
    const { unidade, setUnidade }: UnidadesSelecionadasProps = useContext(UnidadeSelecionadaContext);

    return {
        unidade, setUnidade
    }
    
}

export default useUnidadesSelecionadasContext;