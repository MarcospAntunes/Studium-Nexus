import useTheme from "@/hooks/useTheme";
import ConversorContainerStyled from "@/styles/ConversorContainer.style";
import { darkTheme, lightTheme } from "@/themes";

function ConversorContainer({children}: any) {
    const { theme } = useTheme();

    return(
        <ConversorContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </ConversorContainerStyled>
    )
}

export default ConversorContainer;