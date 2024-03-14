function bhaskara(arrayOfNumbers: Array<number>) {
    const [ a, b, c ] = arrayOfNumbers;
    const delta = (b * b) - (4 * a * c);
    
    if(delta === 0) {
        const x1 = -b / (2 * a);

        return x1;
    }

    if(delta > 0) {
        const raizDeDelta = Math.sqrt(delta)
        const x1 = (-b + raizDeDelta) / (2 * a);
        const x2 = (-b - raizDeDelta) / (2 * a);

        return [x1, x2];
    }

    if(isNaN(delta)) {
        return "Não foi possível realizar o calculo, certifique-se de que forneceu os valores de todos os coeficientes."
    }

    return `O discriminante é igual a ${delta} e, portanto, não pode ser calculado pois é menor que zero.`;
}

export default bhaskara