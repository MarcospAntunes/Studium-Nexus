import ConvertCoinAPIProps from "./exchangerateAPI.type";

async function convertCoinAPI({ number, originCoin, destinyCoin }: ConvertCoinAPIProps): Promise<string> {
    try {
        const apiKey: string | undefined = process.env.EXCHANGERATE_KEY
        const apiUrl: string = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${originCoin}/${destinyCoin}`;

        const req: Response = await fetch(apiUrl);
        const res = await req.json();

        if (req.ok && res.result === "success") {
            const cambio: number = res.conversion_rate;
            const valorConvertido: number = number * cambio;
            const resultado: string = `${valorConvertido.toLocaleString(destinyCoin, {
                style: 'currency',
                currency: destinyCoin
            })}`;

            return resultado
        }

    } catch (err) {
        console.log("Não foi possível realizar a conversão de moedas", err)

        return "Não foi possível realizar a conversão de moedas"
    }

    return "Algo errado :("
}

export default convertCoinAPI;