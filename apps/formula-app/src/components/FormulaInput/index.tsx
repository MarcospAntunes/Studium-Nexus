import { useTheme } from "../../hooks";
import FormulaInputStyled from "./FormulaInput.style";
import FormulaInputProps from "./FormulaInput.type";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";

function FormulaInput({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  aria_label,
  width,
}: FormulaInputProps): JSX.Element {
  const { theme } = useTheme();
  return (
    <FormulaInputStyled
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      theme={theme === "light" ? lightTheme : darkTheme}
      aria-label={aria_label}
      width={width}
    />
  );
}

export default FormulaInput;
