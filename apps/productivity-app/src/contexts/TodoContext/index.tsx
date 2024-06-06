import { Children } from "@studium-nexus/types-commons";
import { createContext, useState, useEffect } from "react";
import { TodoContextProps, itensProps } from "./TodoContext.type";

const TodoContext = createContext<TodoContextProps>({
  itens: [],
  setItens: () => {},
});

TodoContext.displayName = "Todo List";

function TodoProvider({ children }: Children) {
  const [itens, setItens] = useState<itensProps>({ itens: [] });
  const [savedItens, setSavedItens] = useState<itensProps>({ itens: [] });

  useEffect(() => {
    const storedItens = localStorage.getItem("todoList");
    if (storedItens) {
      const parsedItens: itensProps = JSON.parse(storedItens);
      if (parsedItens && Array.isArray(parsedItens.itens)) {
        setSavedItens(parsedItens);
      } else {
        setSavedItens({ itens: [] });
      }
    }
  }, []);

  useEffect(() => {
    if (savedItens.itens.length > 0) {
      setItens(savedItens);
    }
  }, [savedItens]);

  useEffect(() => {
    if (itens.itens.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(itens));
    }
  }, [itens]);

  return (
    <TodoContext.Provider value={{ itens: itens.itens, setItens }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
