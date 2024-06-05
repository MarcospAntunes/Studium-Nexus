"use client";

import { TodoButton } from "../../components";
import MainTodo from "./TodoList.style";
import { useTheme, useTodo } from "../../hooks";
import { Button } from "@studium-nexus/components-commons";
import { StyleSheetManager } from "styled-components";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";

function TodoList(): JSX.Element {
  const {
    itens,
    clearTodo,
    addNewItem,
    setItem,
    item,
    filterList,
    filtredList,
    changeStatus,
  } = useTodo();

  const { theme } = useTheme();

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "status"}>
      <MainTodo theme={theme === "light" ? lightTheme : darkTheme}>
        <section>
          <h1>To do List</h1>
          <h3>Adicione aqui suas tarefas a serem feitas</h3>
        </section>
        <section>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <TodoButton onClick={() => addNewItem()} />

              <input
                type="text"
                name="createTodo"
                value={item}
                id="createTodo"
                placeholder="Crie uma nova tarefa..."
                onChange={(e) => setItem(e.target.value)}
                required
              />
            </fieldset>
          </form>
          <div id="mainContainer">
            <div id="listContainer">
              <div id="controls">
                <p>
                  {itens.filter((value) => value.status === "active").length > 0
                    ? `Restão ${itens.filter((value) => value.status === "active").length} itens`
                    : "Não há itens"}
                </p>
                <Button
                  onClick={() => [clearTodo(), setItem("")]}
                  disabled={itens.length > 0 ? false : true}
                >
                  Apagar tudo
                </Button>
              </div>
              <ul>
                {filtredList.map((value, index) => (
                  <li key={index} className={value.status}>
                    <TodoButton
                      onClick={() =>
                        changeStatus(itens.findIndex((item) => item === value))
                      }
                      checked={value.status}
                    />
                    {value.item}
                  </li>
                ))}
              </ul>
            </div>
            <div id="listControlsContainer">
              <Button onClick={() => filterList("")}>Todos</Button>
              <Button onClick={() => filterList("active")}>Ativos</Button>
              <Button onClick={() => filterList("checked")}>Completados</Button>
            </div>
          </div>
        </section>
      </MainTodo>
    </StyleSheetManager>
  );
}

export default TodoList;
