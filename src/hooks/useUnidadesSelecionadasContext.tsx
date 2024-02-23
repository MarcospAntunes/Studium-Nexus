import { useContext } from "react";
import { UnidadeSelecionadaContext } from "@/contexts/UnidadesSelecionadasContext";
import { UnidadesSelecionadasProps } from "@/types/@index";

function useUnidadesSelecionadasContext() {
    const { unidade, setUnidade }: UnidadesSelecionadasProps = useContext(UnidadeSelecionadaContext);

    return {
        unidade, setUnidade
    }
    
}

export default useUnidadesSelecionadasContext;