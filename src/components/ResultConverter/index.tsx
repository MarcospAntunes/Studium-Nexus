import { useTheme } from "@/hooks";
import ResultConverterStyled from "./ResultConverter.style";
import ResultConverterProps from "./ResultConverter.type";
import { darkTheme, lightTheme } from "@/themes";

function ResultConverter({ children, aria_live }: ResultConverterProps): JSX.Element {
    const { theme } = useTheme();

    return(
        <ResultConverterStyled 
        aria-live={aria_live}
        theme={theme === 'light' ? lightTheme : darkTheme}
        >
            {children}
        </ResultConverterStyled>
    )
}

export default ResultConverter;