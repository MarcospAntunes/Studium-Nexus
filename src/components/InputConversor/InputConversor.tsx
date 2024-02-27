import InputConversorStyled from "./InputConversor.style";
import InputConversorProps from "./InputConversor.type";

function InputConversor({ type, name, id, placeholder, required, onChange, value, theme }: InputConversorProps) {
    return(
        <InputConversorStyled 
            type={type} 
            name={name} 
            id={id} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            required={required}
            theme={theme} 
        />
    )
}

export default InputConversor;