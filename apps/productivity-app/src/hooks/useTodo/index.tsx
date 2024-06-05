"use client";

import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../contexts";

function useTodo() {
  const { itens, setItens } = useContext(TodoContext);
  const [item, setItem] = useState<string>("");
  const [filtredList, setFiltredList] = useState(itens);
  const [currentFilter, setCurrentFilter] = useState<string>("");

  useEffect(() => {
    filterList(currentFilter);
  }, [itens, currentFilter]);

  const addNewItem = () => {
    if (item) {
      setItens((prev) => ({
        itens: [
          ...prev.itens,
          {
            item: item,
            status: "active",
          },
        ],
      }));
      setItem("");
    }
  };

  const changeStatus = (index: number) => {
    const updatedItems = itens.map((todo, i) =>
      i === index
        ? { ...todo, status: todo.status === "checked" ? "active" : "checked" }
        : todo,
    );
    setItens({ itens: updatedItems });
  };

  const filterList = (status: string) => {
    setCurrentFilter(status);
    setFiltredList(
      status ? itens.filter((value) => value.status.includes(status)) : itens,
    );
  };

  const clearTodo = () => {
    setItens({
      itens: [],
    });
    localStorage.setItem("todoList", "");
  };

  return {
    itens,
    setItens,
    clearTodo,
    addNewItem,
    item,
    setItem,
    filtredList,
    changeStatus,
    filterList,
  };
}

export default useTodo;
