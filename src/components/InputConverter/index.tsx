import { useTheme } from "@/hooks";
import InputConverterStyled from "./InputConverter.style";
import InputConverterProps from "./InputConverter.type";
import LabelFileInput from "./LabelFileInput";
import { darkTheme, lightTheme } from "@/themes";

function InputConverter({ type, name, id, placeholder, required, onChange, value, accept }: InputConverterProps): JSX.Element {
    const regex: RegExp = /^.*\\/
    const fileName: string = value?.replace(regex, "")
    const { theme } = useTheme();

    if (type === "file") {
        return (
            <>
                <LabelFileInput
                    htmlFor={name}
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
                        theme={theme === 'light' ? lightTheme : darkTheme}
                    />
                </LabelFileInput>
                <p aria-live="polite">{fileName}</p>
            </>
        )
    }
    return (
        <InputConverterStyled
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            theme={theme === 'light' ? lightTheme : darkTheme}
        />
    )
}

export default InputConverter;