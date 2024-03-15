import { useCalculate } from "@/hooks";
import ArithmeticAverageSection from "./ArithmeticAverage.style";
import { Button, FormulaFormat, FormulaInput, ResultFormula } from "@/components";
import { FormulaContainer, ResultContainer } from "@/containers";
import { useParams } from "next/navigation";

function ArithmeticAverage() {
    const { slug } = useParams();
    const {
        values,
        result, 
        calculate,
        addNewValue,
        clear 
    } = useCalculate()

    const sumArray: undefined | Array<number> = values[0]?.split('+').map((numero: string) => {
        const num = Number(numero)
        return isNaN(num) ? 0 : num
    })
    
    const verifiedSumArray = typeof sumArray === 'object' ? sumArray[0] === 0 ? undefined : sumArray : undefined;

    return (
        <>
            <ArithmeticAverageSection>
                <FormulaContainer>
                    <h3>Insira a soma dos números</h3>
                    <FormulaInput
                        type="text"
                        placeholder="Insira a soma dos números (a1 + a2 + a3...)"
                        onChange={e => addNewValue(0, e.target.value)}
                        aria_label="Insira a soma dos números da média aritmética"
                        value={!values[0] ?  "" : values[0]}
                        required = {true}
                        width={330}
                    />
                    <FormulaFormat aria_label="Formúla de Média Aritmética">
                        M =
                        <span className="indentFormula">
                            <span>
                                {!verifiedSumArray ?
                                    <>
                                        a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub> ... a<sub>n</sub>
                                    </> 
                                :
                                    verifiedSumArray.map((number: number, index: number) => {
                                        if(index === verifiedSumArray.length - 1) {
                                            return <span key={index}>{number}<sub>{index + 1}</sub></span>
                                        }
                                        return <span key={index}>{number}<sub>{index + 1}</sub> + </span>
                                    })
                                }
                            </span>
                            <span className="divider">
                                {verifiedSumArray ? verifiedSumArray.length : "n"}
                            </span>
                        </span>
                    </FormulaFormat>
                </FormulaContainer>
                    <ResultFormula aria-live="assertive">
                        {result ? 
                            Number.isInteger(result) 
                            ? <>M = {result}</> 
                            : <>M ≈ {result}</> 
                        : <>M = ?</>}
                    </ResultFormula>
                    <div className="botoes">
                        <Button
                            onClick={() => calculate(slug)}
                            role="button"
                            aria-label="Calcular raíz(es) da equação quadrática"
                        >
                            Calcular
                        </Button>
                        <Button
                        onClick={() => clear()}
                        role="button"
                        aria-label="Limpar valores fornecidos e resultados."
                        >
                            Limpar
                        </Button>
                    </div>
            </ArithmeticAverageSection>
        </>
    )
}

export default ArithmeticAverage;