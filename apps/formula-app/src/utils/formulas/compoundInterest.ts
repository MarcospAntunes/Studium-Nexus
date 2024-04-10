function compoundInterest(values: Array<number>) {
    const [capital, interestRate, time] = values
    
    const amount = (capital * (1 + interestRate) ** time);

    const interestProcessed = amount - capital;
    
    return [amount, interestProcessed]
}

export default compoundInterest