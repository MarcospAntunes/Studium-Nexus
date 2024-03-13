import InputConverterStyled from "./InputConverter.style";
import InputConverterProps from "./InputConverter.type";
import LabelFileInput from "./LabelFileInput";

function InputConverter({ type, name, id, placeholder, required, onChange, value, theme, accept }: InputConverterProps): JSX.Element {
    const regex = /^.*\\/
    const fileName = value?.replace(regex, "")
    if(type === "file") {
        return(
            <>
            <LabelFileInput 
                htmlFor={name} 
                theme={theme}
                role="button" 
                aria-label="Carregue o arquivo"
            >Carregue o arquivo
            <InputConverterStyled 
                type={type}
                accept={accept} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                value={value ? value : ""}
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
        <InputConverterStyled 
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

export default InputConverter;