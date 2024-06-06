import { Dispatch, SetStateAction } from "react";

type Item = {
  item: string;
  status: string;
};

type itensProps = {
  itens: Item[];
};

type TodoContextProps = {
  itens: Item[];
  setItens: Dispatch<SetStateAction<itensProps>>;
};

export type { Item, itensProps, TodoContextProps };
