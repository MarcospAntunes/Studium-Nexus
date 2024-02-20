import { SelectUnidadeProps } from "@/types";
import styled from "styled-components"

const SelectStyled = styled.select`
    border: none;
    border-radius: 15px;
    width: 100px;
    padding: 8px;
    font-family: inherit;

    &:focus {
        outline: none;
    }
`

function SelectUnidade({arrayDeUnidades, name, id}: SelectUnidadeProps) {
    return(
        <SelectStyled name={name} id={id}>
            <option value="">{name}</option>
            {arrayDeUnidades.map((unidade, index) => (
                <option key={index} value={unidade}>{unidade}</option>
            ))}
        </SelectStyled>
    )
}

export default SelectUnidade;