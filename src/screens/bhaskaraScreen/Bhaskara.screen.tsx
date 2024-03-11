import { FormulaInput, Button, ResultFormula, FormulaFormat } from "@/components";
import { InputContainer, ResultContainer } from "@/containers";
import { useCalculate, useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import { useParams } from "next/navigation";
import BhaskaraSection from "./Bhaskara.style";
import { HowHasCreated } from "./texts";

function Bhaskara() {
    const { slug } = useParams();
    const {
        values,
        result, 
        calculate,
        addNewValue,
        clear 
    } = useCalculate()
    const { theme } = useTheme();

    const verifyFormulaValues = (value: number | undefined, name: string, power?: number) => {
        if(value){
            const valueString = value.toString();

            if(name.includes("^")) return (<>{value}<sup>{power}</sup></>);
            
            if(name === 'b' && !valueString.includes('-')) return `-${value}`;

            return value;
        };
        if(name === 'b') return `-${name}`;
        if(name.includes("^")) return (<>{name[0]}<sup>{power}</sup></>);
        return name;
    }

    return (
        <>
            <BhaskaraSection>
                <div className="formula">
                        <h2>Insira os coeficientes da equação</h2>
                    <InputContainer>
                        <FormulaInput
                            type="number"
                            placeholder="a"
                            value={values[0] ? values[0] : ""}
                            onChange={e => addNewValue(0, Number(e.target.value))}
                            required = {true}
                            aria_label="Coeficiente a da equação quadrática"
                        />
                        <FormulaInput
                            type="number"
                            placeholder="b"
                            value={values[1] ? values[1] : ""}
                            onChange={e => addNewValue(1, Number(e.target.value))}
                            required = {true}
                            aria_label="Coeficiente b da equação quadrática"
                        />
                        <FormulaInput
                            type="number"
                            placeholder="c"
                            value={values[2] ? values[2] : ""}
                            onChange={e => addNewValue(2, Number(e.target.value))}
                            required = {true}
                            aria_label="Coeficiente c da equação quadrática"
                        />
                    </InputContainer>
                    <FormulaFormat aria-label="Formúla de Bhaskara" aria-live="polite" theme={theme === 'light' ? lightTheme : darkTheme}>
                        <span>
                            x = {verifyFormulaValues(values[1], "b")} ± √{verifyFormulaValues(values[1], "b^2", 2)} - 4.{verifyFormulaValues(values[0], "a")}.{verifyFormulaValues(values[2], "c")}
                        </span>
                        <span className="divider">
                            2.{verifyFormulaValues(values[0], "a")}
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
                : <ResultFormula aria-live="assertive">{result}</ResultFormula>}
                <div className="botoes">
                    <Button
                        onClick={() => calculate(slug)}
                        theme={theme === 'light' ? lightTheme : darkTheme}
                        role="button"
                        aria-label="Calcular raíz(es) da equação quadrática"
                    >
                        Calcular
                    </Button>
                    <Button
                    onClick={() => clear()}
                    theme={theme === 'light' ? lightTheme : darkTheme}
                    role="button"
                    aria-label="Limpar valores fornecidos e resultados."
                    >
                        Limpar
                    </Button>
                </div>
            </BhaskaraSection>
            <BhaskaraSection>
                <HowHasCreated />
            </BhaskaraSection>
        </>
    );
}

export default Bhaskara;
