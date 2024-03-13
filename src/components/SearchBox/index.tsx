/* eslint-disable @next/next/no-img-element */
import { SearchContainer } from "@/containers";
import { useSearch, useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function SearchBox(): JSX.Element {
    const { search, setSearch } = useSearch();
    const { theme } = useTheme();

    return(
        <SearchContainer theme={theme === "light" ? lightTheme : darkTheme} role="search">
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
        </SearchContainer>
    )
}

export default SearchBox;