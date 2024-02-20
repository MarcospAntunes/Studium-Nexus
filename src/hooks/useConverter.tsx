/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useUnidadesSelecionadasContext from "./useUnidadesSelecionadasContext";
import converter from "@/utils/converter";
import useConversorReducer from "./useConversorReducer";

function useConverter(slug: string) {
    const { state } = useConversorReducer(slug);
    const [valor, setValor] = useState<string>('');
    const { unidade, setUnidade } = useUnidadesSelecionadasContext();
    const [resultadoDaConversao, setResultadoDaConversao] = useState(0);
    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");

    useEffect(() => {
        setUnidade([origem, destino]);
    }, [destino, origem])

    const pegarValor = () => {
        if(origem && destino) {
        const resultado = converter({unidade, valor, state});
        setResultadoDaConversao(resultado);
        return
        } else {
        alert("Uma ou mais unidades não escolhidas")
        }
        return
    }

    return {
        valor,
        setValor,
        unidade,
        resultadoDaConversao, 
        setOrigem,
        setDestino,
        pegarValor
    }
}

export default useConverter;