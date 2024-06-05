import { useState } from "react";
import { ChangeLayoutContext } from "../../contexts";
import useChangeLayoutContext from "./index";
import { renderHook, act } from "@testing-library/react";

describe("useChangeLayoutContext Hook", () => {
  test("Should switch the value correctly", () => {
    const renderedHook = renderHook(() => useState<boolean>(true)).result;

    const resultChangeLayout = renderHook(() => useChangeLayoutContext(), {
      wrapper: ({ children }) => (
        <ChangeLayoutContext.Provider
          value={{
            layout: renderedHook.current[0],
            setLayout: renderedHook.current[1],
          }}
        >
          {children}
        </ChangeLayoutContext.Provider>
      ),
    });

    act(() => {
      resultChangeLayout.rerender(
        resultChangeLayout.result.current.setLayout(
          !resultChangeLayout.result.current.layout,
        ),
      );
    });

    expect(resultChangeLayout.result.current.layout).toEqual(false);
  });
});
