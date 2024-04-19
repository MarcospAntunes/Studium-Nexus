import { useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import ConversorContainerStyled from "./ConverterContainer.style";
import { Children } from "@studium-nexus/types-commons";

function ConverterContainer({ children }: Children): JSX.Element {
  const { theme } = useTheme();

  return (
    <ConversorContainerStyled
      theme={theme === "light" ? lightTheme : darkTheme}
    >
      {children}
    </ConversorContainerStyled>
  );
}

export default ConverterContainer;
