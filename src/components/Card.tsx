/* eslint-disable @next/next/no-img-element */
"use client"

import { MouseEventHandler } from "react"
import styled from "styled-components"

type CardTypes = {
    img: string
    title: string
    onClick: MouseEventHandler<HTMLLIElement>
}

const CardContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 105px;
    height: 115px;
    border-radius: 15px;

    background-color: #f6f6f6;
    box-shadow: -2px 2px 4px 1px rgba(0, 0, 0, 0.25);

    font-size: 14px;
    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color: #d6d6d6;
        transition: .3s;
    }

    img {
        width: 32px;
        height: 32px;
        
    }
`

function Card({img, title, onClick}: CardTypes) {
    return(
        <CardContainer onClick={onClick}>
            <img src={img} alt={title} />
            <p>{title}</p>
        </CardContainer>
    )
}

export default Card;