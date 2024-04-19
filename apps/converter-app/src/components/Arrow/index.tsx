import { useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import ArrowStyled from "./Arrow.style";

function Arrow(): JSX.Element {
  const { theme } = useTheme();

  return (
    <ArrowStyled
      src={`/icons/arrow.png`}
      alt="arrow"
      theme={theme === "light" ? lightTheme : darkTheme}
    />
  );
}

export default Arrow;
