import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import Children from "@/types/children.type";
import FormulaContainerStyled from "./FormulaContainer.style";

function FormulaContainer({ children }: Children) {
    const { theme } = useTheme();
    return(
        <FormulaContainerStyled theme={theme === 'light' ? lightTheme : darkTheme}>{children}</FormulaContainerStyled>
    )
}

export default FormulaContainer;