import { Children } from "@studium-nexus/types-commons";
import ResultFormulaStyled from "./ResultFormula.style";
import { useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";

function ResultFormula({ children }: Children): JSX.Element {
    const { theme } = useTheme();

    return (
        <ResultFormulaStyled
            aria-live="assertive"
            theme={theme === 'light' ? lightTheme : darkTheme}
        >
            {children}
        </ResultFormulaStyled>
    )
}

export default ResultFormula;