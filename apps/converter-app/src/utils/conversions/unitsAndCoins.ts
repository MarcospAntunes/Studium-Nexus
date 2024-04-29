import { convertCoinAPI } from "../../services";
import { ConvertProps } from "../../services/api/convertAPI/convertAPI.type";

async function convertUnitsAndCoins({
  unit,
  value,
  state,
  slug,
}: ConvertProps): Promise<string | number> {
  if (slug !== "moeda") {
    if (unit) {
      const [origin, destiny] = unit;

      if (state) {
        if (
          Object.prototype.hasOwnProperty.call(state, origin) &&
          Object.prototype.hasOwnProperty.call(state, destiny)
        ) {
          const valueToMultiply: number = state[destiny] / state[origin];
          const result: number = Number(valueToMultiply * Number(value));

          return result;
        } else {
          return "Unidades de origem ou destino não encontradas.";
        }
      }
    }
  } else {
    const [originNameCoin, destinyNameCoin] = unit;
    const number: number = Number(value);

    const chavesOrigem: string[] = Object.keys(state).filter(
      (chave) => state[chave] === originNameCoin,
    );
    const originCoin: string = Object.keys(
      Object.fromEntries(chavesOrigem.map((chave) => [chave, state[chave]])),
    )[0];

    const chavesDestino: string[] = Object.keys(state).filter(
      (chave) => state[chave] === destinyNameCoin,
    );
    const destinyCoin: string = Object.keys(
      Object.fromEntries(chavesDestino.map((chave) => [chave, state[chave]])),
    )[0];

    return await convertCoinAPI({ number, originCoin, destinyCoin });
  }

  return 0;
}

export default convertUnitsAndCoins;
