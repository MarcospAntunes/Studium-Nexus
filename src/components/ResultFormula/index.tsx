import Children from "@/types/children.type";
import ResultFormulaStyled from "./ResultFormula";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function ResultFormula({ children }: Children): JSX.Element {
    const { theme } = useTheme();
    
    return(
        <ResultFormulaStyled 
            aria-live="assertive"
            theme={theme === 'light' ? lightTheme : darkTheme}
        >
            {children}
        </ResultFormulaStyled>
    )
}

export default ResultFormula;