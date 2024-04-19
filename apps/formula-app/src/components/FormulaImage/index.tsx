/* eslint-disable @next/next/no-img-element */

import { useTheme } from "../../hooks";
import FormulaImageProps from "./FormulaImage.type";
import ImgStyled from "./FormulaImage.style";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";

function FormulaImage({ src, alt }: FormulaImageProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <ImgStyled
      src={src}
      alt={alt}
      theme={theme === "light" ? lightTheme : darkTheme}
      loading="lazy"
    />
  );
}

export default FormulaImage;
