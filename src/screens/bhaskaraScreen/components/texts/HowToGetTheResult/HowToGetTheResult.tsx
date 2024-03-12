import { useEffect, useState } from "react"
import RenderBhaskaraExplanation from "./RenderBhaskaraExplanation/RenderBhaskaraExplanation"

type HowToGetTheResultProps = {
    a: number | string
    b: number | string
    c: number | string
}

function HowToGetTheResult({a, b, c}: HowToGetTheResultProps) {
    const [delta, setDelta] = useState<number>();

    useEffect(() => {
        if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
            const result = (b * b) - (4 * a * c);
            setDelta(result)
        } else {
            setDelta(undefined)
        }
    }, [a, b, c, delta])

    return(
        <>
            <h2 id="passo-a-passo">Como Chegar no Resultado</h2>
            <ol type="1">
                <li>
                    Primeiro precisamos calcular o descriminante (delta) como base nos coeficientes fornecidos (a, b e c):

                    <p className="formulaContent">
                        delta = <span>{b}<sup>2</sup></span> - 4.{a}.{c}
                    </p>
                    <p className="formulaContent">
                        delta = {delta !== undefined ? delta : "?"}
                    </p>

                </li>

                {delta !== undefined ? 
                    <>
                        <li>
                            Agora, antes de continuar, precisamos verificar o valor de delta
                            <ul>
                                <br />
                                <li>Caso seja maior que zero, a solução terá duas raízes</li>
                                <li>Delta igual a zero, apenas uma raíz</li>
                                <li>Delta sendo negativo (menor que zero) não terá raíz</li>
                            </ul>
                            <br />
                            <p>Neste caso, delta é igual a {delta}</p>
                        </li>
                        {delta < 0
                            ? <li>Já que temos o valor menor que zero, não será necessário prosseguir com o calculo</li>
                            : RenderBhaskaraExplanation({a, b, delta})
                        }
                    </>
                    : 
                        <li>Para continuar certifique-se de fornecer os coeficientes da função</li>
                }
            </ol>
        </>
    )
}

export default HowToGetTheResult;