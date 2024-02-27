import InputConversorStyled from "./InputConversor.style";
import InputConversorProps from "./InputConversor.type";
import LabelFileInput from "./LabelFileInput/LabelFileInput";

function InputConversor({ type, name, id, placeholder, required, onChange, value, theme }: InputConversorProps) {
    const regex = /^.*\\/
    const fileName = value.replace(regex, "")
    if(type === "file") {
        return(
            <>
            <LabelFileInput 
                htmlFor={name} 
                theme={theme}
                role="button" 
                aria-label="Carregue o arquivo"
            >Carregue o arquivo
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
            </LabelFileInput>
            <p aria-live="polite">{fileName}</p>
            </>
        )
    }
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