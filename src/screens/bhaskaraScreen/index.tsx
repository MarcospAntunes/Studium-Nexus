import { FormulaInput, Button, ResultFormula, FormulaFormat } from "@/components";
import { InputContainer, ResultContainer } from "@/containers";
import { useCalculate } from "@/hooks";
import { useParams } from "next/navigation";
import BhaskaraSection from "./Bhaskara.style";
import { HowHasCreated, HowToGetTheResult, RenderBhaskaraFormula } from "./components/texts";

function Bhaskara() {
    const { slug } = useParams();
    const {
        values,
        result, 
        calculate,
        addNewValue,
        clear 
    } = useCalculate() 

    const [a, b, c] = values[0] !== undefined ? [values[0], values[1], values[2]] : ['a', 'b', 'c']

    return (
        <>
            <BhaskaraSection>
                <div className="formula">
                    <h2>Insira os coeficientes da equação</h2>
                    <InputContainer>
                        <FormulaInput
                            type="number"
                            placeholder="a"
                            value={typeof a === 'number' ? a : ""}
                            onChange={e => addNewValue(0, Number(e.target.value))}
                            required = {true}
                            aria_label="Coeficiente a da equação quadrática"
                        />
                        <FormulaInput
                            type="number"
                            placeholder="b"
                            value={typeof b  === 'number' ? b : ""}
                            onChange={e => addNewValue(1, Number(e.target.value))}
                            required = {true}
                            aria_label="Coeficiente b da equação quadrática"
                        />
                        <FormulaInput
                            type="number"
                            placeholder="c"
                            value={typeof c  === 'number' ? c : ""}
                            onChange={e => addNewValue(2, Number(e.target.value))}
                            required = {true}
                            aria_label="Coeficiente c da equação quadrática"
                        />
                    </InputContainer>
                    <FormulaFormat aria_label="Formúla de Bhaskara" aria_live="polite">
                        <span>
                            x = {RenderBhaskaraFormula(values[1], "b")} ± √{RenderBhaskaraFormula(values[1], "b^2", 2)} - 4.{RenderBhaskaraFormula(values[0], "a")}.{RenderBhaskaraFormula(values[2], "c")}
                        </span>
                        <span className="divider">
                            2.{RenderBhaskaraFormula(values[0], "a")}
                        </span>
                    </FormulaFormat>
                </div>
                {typeof result === 'object' ?
                    <ResultContainer aria-label="Resultado da equação" >
                        <ResultFormula aria-live="assertive">
                            {
                                result.map((number: number, index: number) =>
                                    index === (result.length - 1)
                                        ? <span key={index}>x<sub>{index + 1}</sub> = {number}</span>
                                        : <span key={index}>x<sub>{index + 1}</sub> = {number},</span>
                                )
                            }
                        </ResultFormula>
                    </ResultContainer>
                :   <ResultFormula aria-live="assertive">
                        {
                            isNaN(result) 
                                ? result 
                                : <>x = {
                                    result 
                                        ? result 
                                        : "?"}
                                </>
                        }
                    </ResultFormula>}
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
            </BhaskaraSection>
            <BhaskaraSection>
                <br />
                <HowHasCreated/>
                <br />
                <HowToGetTheResult a={a} b={b} c={c}/>
            </BhaskaraSection>
        </>
    );
}

export default Bhaskara;
