import { act } from "@testing-library/react";
import { renderHookUseSearch } from "../../utils";

describe("useSearch Hook", () => {
  test("Should filter by text correctly", () => {
    const { resultSearch, filtredItens } = renderHookUseSearch();

    act(() => {
      resultSearch.rerender(resultSearch.result.current.setSearch("tempo"));
    });

    expect(resultSearch.result.current.search).toEqual("tempo");
    expect(filtredItens()).toEqual([
      {
        id: "1",
        img: "/icons/tempo.png",
        title: "Conversor de Tempo",
        link: "/conversor/tempo",
        type: "Conversores",
      },
    ]);
  });

  test("Should filter be option correctly", () => {
    const { resultSearch } = renderHookUseSearch();

    act(() => {
      resultSearch.rerender(
        resultSearch.result.current.setFilter("Conversores"),
      );
    });

    expect(resultSearch.result.current.filter).toEqual("Conversores");
  });

  test("Should filter be option and text correctly", () => {
    const { resultSearch, filtredItens } = renderHookUseSearch();

    act(() => {
      resultSearch.rerender(resultSearch.result.current.setFilter("Formula"));
    });
    act(() => {
      resultSearch.rerender(resultSearch.result.current.setSearch("Juros"));
    });

    expect(filtredItens()).toEqual([
      {
        id: "12",
        img: "/icons/jurosSimples.png",
        title: "Juros Simples",
        link: "/formula/juros-simples",
        type: "Formula",
      },
      {
        id: "13",
        img: "/icons/jurosCompostos.png",
        title: "Juros Compostos",
        link: "/formula/juros-compostos",
        type: "Formula",
      },
    ]);
  });
});
