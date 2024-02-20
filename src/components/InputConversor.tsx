import { InputConversorProps } from "@/types";
import styled from "styled-components";

const InputConversorStyled = styled.input`
    font-family: inherit;
    font-size: 14px;
    border: none;
    border-radius: 15px;

    width: 230px;
    padding: 8px;
    background-color: white;
    

    &:focus {
        outline: none;
    }
`

function InputConversor({ type, name, id, placeholder, required, onChange, value }: InputConversorProps) {
    return(
        <InputConversorStyled 
            type={type} 
            name={name} 
            id={id} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            required={required} 
        />
    )
}

export default InputConversor;