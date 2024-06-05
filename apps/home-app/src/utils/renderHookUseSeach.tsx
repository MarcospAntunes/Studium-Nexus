import { itens } from "@studium-nexus/components-commons";
import { renderHook } from "@testing-library/react";
import { useState } from "react";
import { useSearch } from "../hooks";
import { SearchContext } from "../contexts";

function renderHookUseSearch() {
  const resultStateSearch = renderHook(() => useState<string>("")).result;
  const resultStateFilter = renderHook(() => useState<string>("")).result;

  const filtredItens = () => {
    const lowerFilter: string = resultStateFilter.current[0].toLowerCase();
    let filterList = itens.filter((item) =>
      item.type.toLowerCase().includes(lowerFilter),
    );
    const lowerSearch: string = resultStateSearch.current[0].toLowerCase();
    filterList = filterList.filter((item) =>
      item.title.toLowerCase().includes(lowerSearch),
    );
    return filterList;
  };

  const resultSearch = renderHook(() => useSearch(), {
    wrapper: ({ children }) => (
      <SearchContext.Provider
        value={{
          search: resultStateSearch.current[0],
          setSearch: resultStateSearch.current[1],
          filter: resultStateFilter.current[0],
          setFilter: resultStateFilter.current[1],
          filtredItens: filtredItens,
        }}
      >
        {children}
      </SearchContext.Provider>
    ),
  });

  return { resultSearch, filtredItens };
}

export default renderHookUseSearch;
