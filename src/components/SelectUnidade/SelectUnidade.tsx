import SelectStyled from "./SelectUnidade.style";
import SelectUnidadeProps from "./SelectUnidadeType";

function SelectUnidade({arrayDeUnidades, name, id, onChange, theme}: SelectUnidadeProps) {
    return(
        <SelectStyled name={name} id={id} onChange={onChange} theme={theme}>
            <option value="">{name}</option>
            {arrayDeUnidades.map((unidade, index) => (
                <option key={index} value={unidade}>{unidade}</option>
            ))}
        </SelectStyled>
    )
}

export default SelectUnidade;