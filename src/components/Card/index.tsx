/* eslint-disable @next/next/no-img-element */

import { CardContainer } from "@/containers";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import CardTypes from "./Card.type";

function Card({img, title, onClick}: CardTypes): JSX.Element {
    const { theme } = useTheme();  
    return(
        <CardContainer 
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
        </CardContainer>
    )
}

export default Card;