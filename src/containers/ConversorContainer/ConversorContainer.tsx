import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import ConversorContainerStyled from "./ConversorContainer.style";

function ConversorContainer({children}: any) {
    const { theme } = useTheme();

    return(
        <ConversorContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </ConversorContainerStyled>
    )
}

export default ConversorContainer;