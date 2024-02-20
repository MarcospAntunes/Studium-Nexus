import { ConverterProps } from "@/types";

function converter({ unidade, valor, state }: ConverterProps): number {
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

    return 0;
}

export default converter;
