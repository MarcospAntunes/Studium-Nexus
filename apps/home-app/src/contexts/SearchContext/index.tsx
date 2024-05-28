"use client";

import { itens } from "@studium-nexus/components-commons";
import { useMemo, useState, createContext } from "react";
import SearchContextProps from "./SearchContext.type";
import { Children } from "@studium-nexus/types-commons";

const SearchContext = createContext<SearchContextProps | any>("");
SearchContext.displayName = "search";

function SearchProvider({ children }: Children): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const filtredItens = useMemo(() => {
    const lowerFilter: string = filter.toLowerCase();
    let filterList = itens.filter((item) =>
      item.type.toLowerCase().includes(lowerFilter),
    );
    const lowerSearch: string = search.toLowerCase();
    filterList = filterList.filter((item) =>
      item.title.toLowerCase().includes(lowerSearch),
    );

    return filterList;
  }, [filter, search]);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, filter, setFilter, filtredItens }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
