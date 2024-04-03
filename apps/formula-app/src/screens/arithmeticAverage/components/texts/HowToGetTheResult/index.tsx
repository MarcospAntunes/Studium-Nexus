function HowToGetTheResult({
    values }: {
        values: number[] | undefined
    }): JSX.Element {

    const soma = values ? values.reduce((acc, cur) => acc + cur) : 0;

    const result = values ? soma / values.length : 0;
    return (
        <>
            <h3 id="passo-a-passo">Como Chegar no Resultado</h3>
            <ol type="1">
                {values ?
                    <>
                        <li>
                            Primeiro verificamos quantos números temos somando, neste caso temos <strong>{values.length}</strong> números.
                        </li>
                        <li>
                            Agora realizamos a soma de todos os números. Com isso, obtemos o resultado <strong>{soma}</strong>
                        </li>
                        <li>
                            Por fim, basta dividir este resultado ({soma}) por <strong>{values.length}</strong> e, assim, o teremos como resultado: <strong>{result}</strong>
                        </li>
                    </>
                :
                    <>
                        <li>
                            Primeiro verificamos quantos números temos somando, neste caso temos <i>n</i> números.
                        </li>
                        <li>
                            Agora realizamos a soma de todos os números.
                            <p>
                                x<sub>1</sub> +
                                x<sub>2</sub> +
                                x<sub>3</sub> +
                                ...
                                + x<sub>n</sub>
                            </p>

                        </li>
                        <li>
                            Por fim, basta dividir este resultado  por <i>n</i>.
                        </li>
                    </>
                }
            </ol>
        </>
    )
}

export default HowToGetTheResult;