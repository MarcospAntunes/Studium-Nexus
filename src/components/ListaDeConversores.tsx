"use client"

import styled from "styled-components"
import Card from "./Card";
import { useRouter } from "next/navigation";

const UlStyled = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin: 15px 0px 15px 0px;

    list-style: none;
`

function ListaDeConversores() {
    const router = useRouter();
    const handleClick = (title: string) => {
        router.push(`/conversores/${title.toLowerCase()}`)
    }

    return(
        <UlStyled>
            <Card 
                img="../../images/icons/tempo.png"
                title="Tempo"
                onClick={() => handleClick("tempo")} 
            />
            <Card 
                img="../../images/icons/peso.png"
                title="Peso"
                onClick={() => handleClick("peso")} 
            />
            <Card 
                img="../../images/icons/temperatura.png"
                title="Temperatura"
                onClick={() => handleClick("temperatura")} 
            />
            <Card 
                img="../../images/icons/moeda.png"
                title="Moeda"
                onClick={() => handleClick("moeda")} 
            />
            <Card 
                img="../../images/icons/velocidade.png"
                title="Velocidade"
                onClick={() => handleClick("velocidade")} 
            />
            <Card 
                img="../../images/icons/comprimento.png"
                title="Comprimento"
                onClick={() => handleClick("comprimento")} 
            />
            <Card 
                img="../../images/icons/documento.png"
                title="Documento"
                onClick={() => handleClick("documento")} 
            />
            <Card 
                img="../../images/icons/energia.png"
                title="Energia"
                onClick={() => handleClick("energia")} 
            />
            <Card 
                img="../../images/icons/midia.png"
                title="Mídia"
                onClick={() => handleClick("midia")} 
            />
        </UlStyled>
    )
}

export default ListaDeConversores;