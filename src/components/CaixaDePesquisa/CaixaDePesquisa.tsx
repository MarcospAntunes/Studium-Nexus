/* eslint-disable @next/next/no-img-element */
import { PesquisaContainer } from "@/containers";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import { useState } from "react";

function CaixaDePesquisa() {
    const [busca, setBusca] = useState("")
    const { theme } = useTheme();

    return(
        <PesquisaContainer theme={theme === "light" ? lightTheme : darkTheme}>
            <img src="../../images/icons/buscar.png" alt="buscar" />
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