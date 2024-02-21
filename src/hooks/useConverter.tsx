/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useUnidadesSelecionadasContext from "./useUnidadesSelecionadasContext";
import converter from "@/utils/converter";
import useConversorReducer from "./useConversorReducer";
import converterArquivo from "@/utils/converterArquivo";

function useConverter(slug: string) {
    const { state } = useConversorReducer(slug);
    const [valor, setValor] = useState<string>("");
    const [upload, setUpload] = useState<[File, string]>();
    const { unidade, setUnidade } = useUnidadesSelecionadasContext();
    const [resultadoDaConversao, setResultadoDaConversao] = useState<any>(0);
    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");

    useEffect(() => {
        setUnidade([origem, destino]);
    }, [destino, origem])

    const pegarValor = () => {
        if(origem && destino) {
            if(slug === "documento" || slug === "midia") {
                const resultado = converterArquivo({unidade, upload, state})
                setResultadoDaConversao(resultado);

                return
            } else {
                const resultado = converter({unidade, valor, state});
                setResultadoDaConversao(resultado);

                return
            }
        } else {
        alert("Uma ou mais unidades não escolhidas")
        }
        return
    }

    return {
        setOrigem,
        setValor,
        setDestino,
        setUpload,
        valor,
        unidade,
        resultadoDaConversao, 
        upload,
        pegarValor
    }
}

export default useConverter;