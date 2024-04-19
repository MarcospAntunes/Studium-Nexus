"use client";

import { itens } from "@studium-nexus/components-commons";
import { useMemo, useState, createContext } from "react";
import SearchContextProps from "./SearchContext.type";
import { Children } from "@studium-nexus/types-commons";

const SearchContext = createContext<SearchContextProps | any>("");
SearchContext.displayName = "search";

function SearchProvider({ children }: Children): JSX.Element {
  const [search, setSearch] = useState<string>("");

  const filtredItens = useMemo(() => {
    const lowerSearch: string = search.toLowerCase();
    const filterList = itens.filter((item) =>
      item.title.toLowerCase().includes(lowerSearch)
    );

    return filterList;
  }, [search]);

  return (
    <SearchContext.Provider value={{ search, setSearch, filtredItens }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
