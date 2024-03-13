import { convertCoin } from "@/services";
import { ConvertProps } from "@/services/api/convertAPI/convertAPI.type";

async function convertUnitsAndCoins({ unit, value, state, slug}: ConvertProps): Promise<string | number> {
    if(slug !== "moeda") {
        if(unit) {
            const [origin, destiny] = unit;
    
            if(state) {
                if (state.hasOwnProperty(origin) && state.hasOwnProperty(destiny)) {
                    const valueToMultiply = state[destiny] / state[origin];
                    const result = Number((valueToMultiply * Number(value)));
    
                    return result;
                } else {
                    console.log('Unidades de origem ou destino não encontradas.');
                    return 0;
                }
            }
        }
    } else {
        const [originNameCoin, destinyNameCoin] = unit;
        const number = Number(value)

        const chavesOrigem = Object.keys(state).filter(chave => state[chave] === originNameCoin);
        const originCoin = Object.keys(Object.fromEntries(chavesOrigem.map(chave => [chave, state[chave]])))[0];

        const chavesDestino = Object.keys(state).filter(chave => state[chave] === destinyNameCoin);
        const destinyCoin = Object.keys(Object.fromEntries(chavesDestino.map(chave => [chave, state[chave]])))[0];
        
        return await convertCoin({ number, originCoin, destinyCoin })
    }

    return 0;
}

export default convertUnitsAndCoins;
