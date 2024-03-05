/* eslint-disable @next/next/no-img-element */
import { PesquisaContainer } from "@/containers";
import { useSearch, useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function CaixaDePesquisa(): JSX.Element {
    const { search, setSearch } = useSearch();
    const { theme } = useTheme();

    return(
        <PesquisaContainer theme={theme === "light" ? lightTheme : darkTheme} role="search">
            <img src="../../images/icons/buscar.png" alt="buscar" role="img"/>
            <input 
                type="text" 
                value={search}
                onChange={e => setSearch(e.target.value)} 
                name="buscar" 
                id="buscar"
                placeholder="Pesquisar"
                role="searchbox"
            />
        </PesquisaContainer>
    )
}

export default CaixaDePesquisa;