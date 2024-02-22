/* eslint-disable @next/next/no-img-element */

import CardContainer from "@/containers/CardContainer";
import useTheme from "@/hooks/useTheme";
import { darkTheme, lightTheme } from "@/themes";
import { CardTypes } from "@/types";

function Card({img, title, onClick}: CardTypes) {
    const { theme } = useTheme();  
    return(
        <CardContainer onClick={onClick} theme={theme === "light" ? lightTheme : darkTheme}>
            <img src={img} alt={title} />
            <p>{title}</p>
        </CardContainer>
    )
}

export default Card;