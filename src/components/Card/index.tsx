/* eslint-disable @next/next/no-img-element */

import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import CardTypes from "./Card.type";
import CardStyled from "./Card.style";

function Card({img, title, onClick}: CardTypes): JSX.Element {
    const { theme } = useTheme();  
    return(
        <CardStyled 
            onClick={onClick} 
            theme={theme === "light" ? lightTheme : darkTheme} 
            role="button"
        >
            <img 
                src={img} 
                alt={`${title} icone`} 
                role="img"
            />
            <p>{title}</p>
        </CardStyled>
    )
}

export default Card;