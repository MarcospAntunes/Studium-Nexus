import { Dispatch, SetStateAction } from "react";

type SearchContextProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  filtredItens: {
    id: string;
    img: string;
    title: string;
    type: string;
  }[];
};

export default SearchContextProps;
