import { useEffect } from "react";
import SelectStyled from "./SelectUnidade.style";
import SelectUnidadeProps from "./SelectUnidadeType";

function SelectUnidade({arrayDeUnidades, name, id, onChange, theme, defaultValue = null, setOrigem}: SelectUnidadeProps): JSX.Element {
    const unidadeDocumentoAnexado: string = defaultValue ? defaultValue : "";
    const unidadesFiltradas = arrayDeUnidades.filter((unidade) => {
        return unidade !== unidadeDocumentoAnexado
    })

    useEffect(() => {
        if(setOrigem && defaultValue) setOrigem(defaultValue)
    }, [defaultValue, setOrigem])

    return(
        <SelectStyled name={name} id={id} onChange={onChange} theme={theme} role="listbox">
            <option value={unidadeDocumentoAnexado} aria-live="polite">{unidadeDocumentoAnexado ? unidadeDocumentoAnexado : name}</option>
            {unidadesFiltradas.map((unidade: any, index) => (
                <option key={index} value={unidade} role="option">{unidade}</option>
            ))}
        </SelectStyled>
    )
}

export default SelectUnidade;