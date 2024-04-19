"use client";

import { SearchContext } from "../../contexts";
import SearchContextProps from "../../contexts/SearchContext/SearchContext.type";
import { useContext } from "react";

function useSearch() {
  const { search, setSearch, filtredItens }: SearchContextProps =
    useContext(SearchContext);

  return {
    search,
    setSearch,
    filtredItens,
  };
}

export default useSearch;
