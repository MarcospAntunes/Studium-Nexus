import itens from '../../json/itens.json'
import { useMemo, useState, createContext } from 'react';
import SearchContextProps from './SearchContext.type';
import Children from '@/types/children.type';

const SearchContext = createContext<SearchContextProps | any>("");
SearchContext.displayName = "search";

function SearchProvider({ children }: Children) {
    const [search, setSearch] = useState<string>("");

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