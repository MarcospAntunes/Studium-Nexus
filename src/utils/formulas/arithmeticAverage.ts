function arithmeticAverage(soma: string): string | number {
    if(soma.includes("+")) {
        const array = soma.split('+').map((numero) => {
            const num = Number(numero);

            return isNaN(num) ? 0 : num
        });
    
        const divider = array.length
        const sum = array.reduce((prev, acc) => prev + acc)
    
        const media = sum / divider;

        if(!Number.isInteger(media)) {
            return media.toFixed(2);
        }
    
        return media
    }

    return "Certifique-se de passar '+' depois de cada número"
}


export default arithmeticAverage;