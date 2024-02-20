/* eslint-disable @next/next/no-img-element */
"use client"

import PesquisaContainer from "@/containers/PesquisaContainer";
import { useState } from "react";

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