"use client"

import styled from "styled-components"
import Card from "./Card";
import { Console } from "console";

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
    return(
        <UlStyled>
            <Card 
                img="../../images\icons\light-theme\tempo.png"
                title="Tempo"
                onClick={() => console.log('teste')} 
            />
            <Card 
                img="../../images\icons\light-theme\peso.png"
                title="Peso"
                onClick={() => console.log('teste')} 
            />
            <Card 
                img="../../images\icons\light-theme\temperatura.png"
                title="Temperatura"
                onClick={() => console.log('teste')} 
            />
            <Card 
                img="../../images\icons\light-theme\moeda.png"
                title="Moeda"
                onClick={() => console.log('teste')} 
            />
            <Card 
                img="../../images\icons\light-theme\velocidade.png"
                title="velocidade"
                onClick={() => console.log('teste')} 
            />
            <Card 
                img="../../images\icons\light-theme\comprimento.png"
                title="Comprimento"
                onClick={() => console.log('teste')} 
            />
            <Card 
                img="../../images\icons\light-theme\documento.png"
                title="Documento"
                onClick={() => console.log('teste')} 
            />
            <Card 
                img="../../images\icons\light-theme\energia.png"
                title="Energia"
                onClick={() => console.log('teste')} 
            />
            <Card 
                img="../../images\icons\light-theme\midia.png"
                title="Mídia"
                onClick={() => console.log('teste')} 
            />
        </UlStyled>
    )
}

export default ListaDeConversores;