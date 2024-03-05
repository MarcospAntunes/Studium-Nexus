/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import converter from "@/utils/converter";
import { criaTrabalho, exportarArquivo, importarArquivo } from "@/services";
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { useUnidadesSelecionadasContext, useConversorReducer } from "@/hooks";

dotenv.config();

function useConverter(slug: string) {
    const { state } = useConversorReducer(slug);
    const [valor, setValor] = useState<string>("");
    const [upload, setUpload] = useState<[File, string] | any>([]);
    const { unidade, setUnidade } = useUnidadesSelecionadasContext();
    const [resultadoDaConversao, setResultadoDaConversao] = useState<any>(0);
    const [origem, setOrigem] = useState<string>("");
    const [destino, setDestino] = useState<string>("");
    const taskID: string = uuidv4();

    useEffect(() => {
        setUnidade([origem, destino]);
    }, [destino, origem])

    const pegarValor = async () => {
        if(origem && destino) {
            if(slug === "documento" || slug === "midia") {
                setResultadoDaConversao(["", 15])
                try {
                    const apiKey = process.env.CONVERT_KEY;
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
                const resultado = await converter({ unidade, valor, state, slug })
                setResultadoDaConversao(resultado);
            }
        } else {
            alert("Uma ou mais unidades não foram escolhidas");
        }
    }

    const limpar = () => {
        const selecionados = document.querySelectorAll("select");
        selecionados.forEach((selecionado) => {
            selecionado.value = "";
        })
        
        setDestino("");
        setOrigem("");
        setResultadoDaConversao(0);
        setUpload([]);
        setValor("");
    }

    return {
        setOrigem,
        setValor,
        setDestino,
        setUpload,
        setResultadoDaConversao,
        valor,
        unidade,
        resultadoDaConversao, 
        upload,
        pegarValor,
        limpar
    }
}

export default useConverter;