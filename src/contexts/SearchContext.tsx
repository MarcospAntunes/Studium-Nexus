import itens from '../json/itens.json'
import { useMemo, useState, createContext } from 'react';

const SearchContext = createContext<any>("");
SearchContext.displayName = "search";

function SearchProvider({ children }: any) {
    const [search, setSearch] = useState("");

    const filtredItens = useMemo(() => {
        const lowerSearch = search.toLowerCase()
        const filtraLista = itens.filter((item) => item.title.toLowerCase().includes(lowerSearch))

        return filtraLista
    }, [search])

    return (
        <SearchContext.Provider value={{ search, setSearch, filtredItens }}>
            {children}
        </SearchContext.Provider>
    )
}

export {
    SearchContext,
    SearchProvider
}