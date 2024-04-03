"use client"

import { useCalculate } from "../../hooks";
import { useParams } from "next/navigation";
import SimplesInterestSection from "./SimpleInterest.style";
import { Button, FormulaFormat, FormulaInput, ResultFormula } from "../../components";
import { FormulaContainer, InputContainer, ResultContainer } from "../../containers";
import { HowHasCreated, HowToGetTheResult } from "./components";

function SimpleInterest(): JSX.Element {
    const { slug } = useParams();
    const {
        values,
        result,
        calculate,
        addNewValue,
        clear
    } = useCalculate()

    const [amount, fees] = result || [0, 0];

    const [c, t, i] = [values[0], values[1], values[2]]
    return (
        <>
            <SimplesInterestSection>
                <FormulaContainer>
                    <h2>Insira os valores da operação financeira</h2>
                    <InputContainer>
                        <FormulaInput
                            type="number"
                            placeholder="C"
                            value={typeof c === 'number' ? c : ""}
                            onChange={e => addNewValue(0, Number(e.target.value))}
                            required={true}
                            aria_label="capital inicial"
                            width={60}
                        />
                        <FormulaInput
                            type="number"
                            placeholder="t"
                            value={typeof t === 'number' ? t : ""}
                            onChange={e => addNewValue(1, Number(e.target.value))}
                            required={true}
                            aria_label="tempo de aplicação"
                            width={60}
                        />
                        <FormulaInput
                            type="number"
                            placeholder="i"
                            value={typeof i === 'number' ? i : ""}
                            onChange={e => addNewValue(2, Number(e.target.value))}
                            required={true}
                            aria_label="taxa de juros"
                            width={60}
                        />
                    </InputContainer>
                    <FormulaFormat aria_label="Formúla de Juros simples" aria_live="polite">
                        J = {c ? c : "C"} . {i ? i : "i"} . {t ? t : "t"}
                    </FormulaFormat>
                </FormulaContainer>
                <ResultContainer aria-label="Resultado da equação" >
                    <ResultFormula aria-live="assertive">
                        <span>M = {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        <span>J = {fees.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </ResultFormula>
                </ResultContainer>
                <div className="botoes">
                    <Button
                        onClick={() => calculate(slug)}
                        role="button"
                        aria-label="Calcular juros simples"
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
            </SimplesInterestSection>
            <SimplesInterestSection>
            <br />
                <HowHasCreated />
                <br />
                <HowToGetTheResult values={values} result={result || []} />
            </SimplesInterestSection>
        </>
    )
}

export default SimpleInterest;