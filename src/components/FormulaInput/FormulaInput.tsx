import { useTheme } from "@/hooks";
import FormulaInputStyled from "./FormulaInput.style";
import FormulaInputProps from "./FormulaInput.type";
import { darkTheme, lightTheme } from "@/themes";

function FormulaInput({ type, placeholder, value, onChange, required = false, aria_label }: FormulaInputProps) {
    const { theme } = useTheme();
    return (
        <FormulaInputStyled 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required = {required}
            theme={theme === "light" ? lightTheme : darkTheme}
            aria-label={aria_label}
        />
    
    )
}

export default FormulaInput;