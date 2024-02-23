import { useTheme } from "@/hooks/@index";
import { ConversorContainerStyled } from "@/styles/@index";
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