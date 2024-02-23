/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useUnidadesSelecionadasContext from "./useUnidadesSelecionadasContext";
import converter from "@/utils/converter";
import useConversorReducer from "./useConversorReducer";
import { criaTrabalho, exportarArquivo, importarArquivo } from "@/services/api";
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

function useConverter(slug: string) {
    const { state } = useConversorReducer(slug);
    const [valor, setValor] = useState<string>("");
    const [upload, setUpload] = useState<[File, string]>();
    const { unidade, setUnidade } = useUnidadesSelecionadasContext();
    const [resultadoDaConversao, setResultadoDaConversao] = useState<any>(0);
    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");
    console.log(resultadoDaConversao)
    const taskID = uuidv4();

    useEffect(() => {
        setUnidade([origem, destino]);
    }, [destino, origem])

    const pegarValor = async () => {
        if(origem && destino) {
            if(slug === "documento" || slug === "midia") {
                try {
                    const apiKey = process.env.SECRET_KEY;
                    const resultadoCriaTrabalho = await criaTrabalho({unidade, upload, taskID, apiKey});
                    setResultadoDaConversao(resultadoCriaTrabalho);

                    if (resultadoCriaTrabalho && resultadoCriaTrabalho[1] !== -1) {
                        const data = resultadoCriaTrabalho[0];
                        const file = upload![0];
                        const resultadoImportarArquivo = await importarArquivo({data, file});
                        setResultadoDaConversao(resultadoImportarArquivo);

                        if (resultadoImportarArquivo && resultadoImportarArquivo[1] !== -1) {
                            const resultadoExportarArquivo = await exportarArquivo({data, apiKey});
                            setResultadoDaConversao(resultadoExportarArquivo);
                        }
                    }
                } catch (error) {
                    console.error('Erro durante a conversão:', error);
                }
            } else {
                const resultado = converter({ unidade, valor, state })
                setResultadoDaConversao(resultado);
            }
        } else {
            alert("Uma ou mais unidades não foram escolhidas");
        }
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