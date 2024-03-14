import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import Children from "@/types/children.type";
import NavigationStyled from "./Navigation.style";

function Navigation({ children }: Children): JSX.Element {
    const { theme } = useTheme();

    return(
        <NavigationStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </NavigationStyled>
    )
}

export default Navigation;