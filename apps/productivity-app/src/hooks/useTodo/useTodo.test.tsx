import { act, renderHook } from "@testing-library/react";
import useTodo from "./index";
import { TodoContext } from "../../contexts";
import { useState } from "react";

const itens = {
  itens: [
    { item: "a", status: "active" },
    { item: "b", status: "checked" },
    { item: "c", status: "checked" },
    { item: "d", status: "checked" },
    { item: "e", status: "active" },
    { item: "f", status: "active" },
    { item: "g", status: "active" },
    { item: "h", status: "active" },
    { item: "i", status: "active" },
    { item: "j", status: "active" },
    { item: "k", status: "active" },
  ],
};

describe("useTodo hook", () => {
  test("should return correct itens", () => {
    const stateHookRendered = renderHook(() => useState(itens)).result;
    const [itensState, setItens] = stateHookRendered.current;
    const useTodoRender = renderHook(() => useTodo(), {
      wrapper: ({ children }) => (
        <TodoContext.Provider
          value={{ itens: itensState.itens, setItens: setItens }}
        >
          {children}
        </TodoContext.Provider>
      ),
    });
    const newItem = { item: "marcos", status: "active" };
    itens.itens.push(newItem);
    act(() => {
      useTodoRender.rerender(useTodoRender.result.current.setItens(itens));
    });

    const lastIndex = useTodoRender.result.current.itens.length - 1;
    expect(useTodoRender.result.current.itens[lastIndex].item).toContain(
      newItem.item,
    );
  });
});
