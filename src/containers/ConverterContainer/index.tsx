import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import ConversorContainerStyled from "./ConverterContainer.style";
import Children from "@/types/children.type";

function ConversorContainer({ children }: Children): JSX.Element {
    const { theme } = useTheme();

    return (
        <ConversorContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </ConversorContainerStyled>
    )
}

export default ConversorContainer;