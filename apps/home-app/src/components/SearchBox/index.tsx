/* eslint-disable @next/next/no-img-element */

"use client"

import { useSearch, useTheme } from "../../hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import SearchBoxStyled from "./SearchBox.style";

function SearchBox(): JSX.Element {
    const { search, setSearch } = useSearch();
    const { theme } = useTheme();

    return (
        <SearchBoxStyled theme={theme === "light" ? lightTheme : darkTheme} role="search">
            <img src="/icons/buscar.png" alt="buscar" role="img" />
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                name="buscar"
                id="buscar"
                placeholder="Pesquisar"
                role="searchbox"
            />
        </SearchBoxStyled>
    )
}

export default SearchBox;