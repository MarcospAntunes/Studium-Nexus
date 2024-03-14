function bhaskara(arrayOfNumbers: Array<number>): string | number | number[] {
    const [ a, b, c ] = arrayOfNumbers;
    const delta: number = (b * b) - (4 * a * c);
    
    if(delta === 0) {
        const x1: number = -b / (2 * a);

        return x1;
    }

    if(delta > 0) {
        const raizDeDelta: number = Math.sqrt(delta)
        const x1: number = (-b + raizDeDelta) / (2 * a);
        const x2: number = (-b - raizDeDelta) / (2 * a);

        return [x1, x2];
    }

    if(isNaN(delta)) {
        return "Não foi possível realizar o calculo, certifique-se de que forneceu os valores de todos os coeficientes."
    }

    return `O discriminante é igual a ${delta} e, portanto, não pode ser calculado pois é menor que zero.`;
}

export default bhaskara