import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import FormulaFormatStyled from "./FormulaFormat.style";
import FormulaFormatProps from "./FormulaFormat.type";

function FormulaFormat({ children, aria_label, aria_live }: FormulaFormatProps): JSX.Element {

    const { theme } = useTheme();

    return (
        <FormulaFormatStyled
            aria-label={aria_label}
            aria-live={aria_live}
            theme={theme === 'light' ? lightTheme : darkTheme}
        >
            {children}
        </FormulaFormatStyled>
    )
}

export default FormulaFormat;