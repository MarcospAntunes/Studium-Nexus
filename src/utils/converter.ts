import { converterMoeda } from "@/services";
import { ConverterProps } from "@/services/api/convertAPI/convertAPI.type";

async function converter({ unidade, valor, state, slug}: ConverterProps): Promise<string | number> {
    if(slug !== "moeda") {
        if(unidade) {
            const [origem, destino] = unidade;
    
            if(state) {
                if (state.hasOwnProperty(origem) && state.hasOwnProperty(destino)) {
                    const valorParaMultiplicar = state[destino] / state[origem];
                    const resultado = Number((valorParaMultiplicar * Number(valor)));
    
                    return resultado;
                } else {
                    console.log('Unidades de origem ou destino não encontradas.');
                    return 0;
                }
            }
        }
    } else {
        const [nomeMoedaOrigem, nomeMoedaDestino] = unidade;
        const numero = Number(valor)

        const chavesOrigem = Object.keys(state).filter(chave => state[chave] === nomeMoedaOrigem);
        const moedaOrigem = Object.keys(Object.fromEntries(chavesOrigem.map(chave => [chave, state[chave]])))[0];

        const chavesDestino = Object.keys(state).filter(chave => state[chave] === nomeMoedaDestino);
        const moedaDestino = Object.keys(Object.fromEntries(chavesDestino.map(chave => [chave, state[chave]])))[0];
        
        return await converterMoeda({ numero, moedaOrigem, moedaDestino })
    }

    return 0;
}

export default converter;
