/* eslint-disable @next/next/no-img-element */

import CardContainer from "@/containers/CardContainer";
import { CardTypes } from "@/types";

function Card({img, title, onClick}: CardTypes) {
    return(
        <CardContainer onClick={onClick}>
            <img src={img} alt={title} />
            <p>{title}</p>
        </CardContainer>
    )
}

export default Card;