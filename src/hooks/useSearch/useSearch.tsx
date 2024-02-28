import { SearchContext } from "@/contexts/@index";
import { useContext, useState } from "react";

function useSearch() {
    const { search, setSearch, filtredItens } = useContext(SearchContext);

    return {
        search,
        setSearch,
        filtredItens
    }
}

export default useSearch;