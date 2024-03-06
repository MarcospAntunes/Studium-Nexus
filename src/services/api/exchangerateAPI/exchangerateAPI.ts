import ConvertCoinProps from "./exchangerateAPI.type";

async function convertCoin({ number, originCoin, destinyCoin }: ConvertCoinProps): Promise<string> {
    try {
        const apiKey = process.env.EXCHANGERATE_KEY
        const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${originCoin}/${destinyCoin}`;

        const req = await fetch(apiUrl);
        const res = await req.json();

        if(req.ok && res.result === "success") {
            const cambio = res.conversion_rate;
            const valorConvertido = number * cambio;
            const resultado = `${valorConvertido.toLocaleString(destinyCoin,{
                style: 'currency',
                currency: destinyCoin
            })}`;

            return resultado
        }

    } catch(err) {
        console.log("Não foi possível realizar a conversão de moedas", err)
        
        return "Não foi possível realizar a conversão de moedas"
    }

    return "Algo errado :("
}

export default convertCoin;