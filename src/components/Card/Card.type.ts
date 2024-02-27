import { MouseEventHandler } from "react";

type CardTypes = {
    img: string
    title: string
    onClick: MouseEventHandler<HTMLLIElement>
}

export default CardTypes;