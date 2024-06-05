import { useState } from "react";
import { UnitSelectedContext } from "../../contexts";
import useUnitsSelectedContext from "./index";
import { renderHook, act } from "@testing-library/react";

const unit = ["cm", "m", "dm", "mm"];

describe("useUnitsSelectedContext Hook", () => {
  test("Should return the correct units", () => {
    const renderedHook = renderHook(() => useState<string[]>([])).result;

    const resultUnitsSelected = renderHook(() => useUnitsSelectedContext(), {
      wrapper: ({ children }) => (
        <UnitSelectedContext.Provider
          value={{
            unit: renderedHook.current[0],
            setUnit: renderedHook.current[1],
          }}
        >
          {children}
        </UnitSelectedContext.Provider>
      ),
    });

    act(() => {
      resultUnitsSelected.rerender(
        resultUnitsSelected.result.current.setUnit(unit),
      );
    });

    expect(resultUnitsSelected.result.current.unit).toEqual(unit);
  });
});
