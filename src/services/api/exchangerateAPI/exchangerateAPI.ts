import converterMoedaProps from "./exchangerateAPI.type";

async function converterMoeda({ numero, moedaOrigem, moedaDestino }: converterMoedaProps) {
    try {
        const apiKey = process.env.EXCHANGERATE_KEY
        const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${moedaOrigem}/${moedaDestino}`;

        const req = await fetch(apiUrl);
        const res = await req.json();

        if(req.ok && res.result === "success") {
            const cambio = res.conversion_rate;
            const valorConvertido = numero * cambio;
            const resultado = `${valorConvertido.toLocaleString(moedaDestino,{
                style: 'currency',
                currency: moedaDestino
            })}`;

            return resultado
        }

    } catch(err) {
        console.log("Não foi possível realizar a conversão de moedas", err)
        
        return "Não foi possível realizar a conversão de moedas"
    }

    return "Algo errado :("
}

export default converterMoeda;