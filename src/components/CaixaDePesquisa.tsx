/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";
import styled from "styled-components";

const PesquisaContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    width: 140px;
    padding: 5px;
    border-radius: 15px;
    
    background-color: #EFEFEF;

    img {
        width: 24px;
        height: 24px;
    }

    input {
        width: 100%;
        border: none;
        background-color: transparent;
        font-size: 14px;

        &:focus {
            outline: none;
        }
    }
`

function CaixaDePesquisa() {
    const [busca, setBusca] = useState("")

    return(
        <PesquisaContainer>
            <img src="../../images/icons/light-theme/buscar.png" alt="buscar" />
            <input 
                type="text" 
                value={busca}
                onChange={e => setBusca(e.target.value)} 
                name="buscar" 
                id="buscar"
                placeholder="Pesquisar"
            />
        </PesquisaContainer>
    )
}

export default CaixaDePesquisa;