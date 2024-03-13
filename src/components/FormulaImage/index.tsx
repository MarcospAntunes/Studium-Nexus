/* eslint-disable @next/next/no-img-element */

import { useTheme } from "@/hooks";
import FormulaImageProps from "./FormulaImage.type";
import ImgStyled from "./FormulaImage.style";
import { darkTheme, lightTheme } from "@/themes";

function FormulaImage({ src, alt }: FormulaImageProps) {
    const { theme } = useTheme();

    return(
        <ImgStyled src={src} alt={alt} theme={theme === "light" ? lightTheme : darkTheme} loading="lazy"/>
    )
}

export default FormulaImage;