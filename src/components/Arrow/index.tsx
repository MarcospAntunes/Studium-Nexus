import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import ArrowStyled from "./Arrow.style";

function Arrow() {
    const { theme } = useTheme();

    return(
        <ArrowStyled 
            src={`../../images/icons/arrow.png`} 
            alt="arrow" 
            theme={theme === "light" ? lightTheme : darkTheme} 
        />
    )
}

export default Arrow;