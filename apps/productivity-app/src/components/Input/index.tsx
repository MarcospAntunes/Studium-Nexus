import { useTheme } from "../../hooks";
import InputStyled from "./Input.style";
import InputProps from "./Input.type";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";

function Input({
  type,
  name,
  id,
  placeholder,
  required,
  onChange,
  value,
  accept,
  multiple = false,
}: InputProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <InputStyled
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      theme={theme === "light" ? lightTheme : darkTheme}
    />
  );
}

export default Input;
