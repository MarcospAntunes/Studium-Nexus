"use client"

import CompoundInterestSection from "./CompoundInterest.style";
import { useCalculate } from "../../hooks";
import { FormulaContainer, InputContainer, ResultContainer } from "../../containers";
import { Button, FormulaFormat, FormulaInput, ResultFormula } from "../../components";
import { HowHasCreated, HowToGetTheResult } from "./components";
import { compoundInterest } from "../../utils";

function CompoundInterest(): JSX.Element {
    const {
        values,
        result,
        setResult,
        addNewValue,
        clear
    } = useCalculate()

    const [amount, fees] = result || [0, 0];

    const [c, t, i] = [values[0], values[1], values[2]]
    
    return(
        <>
            <CompoundInterestSection>
                <FormulaContainer>
                        <h2>Insira os valores da operação financeira</h2>
                        <InputContainer>
                            <FormulaInput 
                                type="number"
                                placeholder="C"
                                value={typeof c === 'number' ? c : ""}
                                onChange={e => addNewValue(0, Number(e.target.value))}
                                required={true}
                                aria_label="Capital"
                                width={60}
                            />
                            <FormulaInput
                                type="number"
                                placeholder="t"
                                value={typeof t === 'number' ? t : ""}
                                onChange={e => addNewValue(1, Number(e.target.value))}
                                required={true}
                                aria_label="Tempo"
                                width={60}
                            />
                            <FormulaInput
                                type="number"
                                placeholder="i"
                                value={typeof i === 'number' ? i : ""}
                                onChange={e => addNewValue(2, Number(e.target.value))}
                                required={true}
                                aria_label="Juros"
                                width={60}
                            />
                        </InputContainer>
                        <FormulaFormat aria_label="Formúla de Juros simples" aria_live="polite">
                            <span> 
                                M = {c ? c : "C"} (1 + {i ? i : "i"})<sup>{t ? t : "t"}</sup>
                            </span>
                        </FormulaFormat>
                    </FormulaContainer>
                    <ResultContainer aria-label="Resultado da equação" >
                        <ResultFormula aria-live="assertive">
                            <span>M = {
                                !isNaN(amount) ? amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                : "Valor invalído!"
                            }</span>
                            <span>J = {
                                !isNaN(fees) ? fees.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                : "Valor invalído!"
                            }</span>
                        </ResultFormula>
                    </ResultContainer>
                    <div className="botoes">
                        <Button
                            onClick={() => setResult(compoundInterest(values))}
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
            </CompoundInterestSection>
            <CompoundInterestSection>
                <br />
                <HowHasCreated />
                <br />
                <HowToGetTheResult values={values} result={result || []} />
            </CompoundInterestSection>
        </>
    )
}


export default CompoundInterest;