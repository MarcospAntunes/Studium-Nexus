import { useTheme } from "../../../hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import LabelFileInputStyled from "./LabelFileInput.style";
import LabelFileInputProps from "./LabelFileInput.type";

function LabelFileInput({
  children,
  htmlFor,
  role,
}: LabelFileInputProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <LabelFileInputStyled
      htmlFor={htmlFor}
      theme={theme === "light" ? lightTheme : darkTheme}
      role={role}
      aria-label="Carregue o arquivo"
    >
      {children}
    </LabelFileInputStyled>
  );
}

export default LabelFileInput;
