import { bhaskara } from "../../utils";
import useCalculate from "./index";
import { renderHook, act } from "@testing-library/react";

describe("useCalculate Hook", () => {
  test("Should add new value", () => {
    const { result } = renderHook(() => useCalculate());
    act(() => {
      result.current.addNewValue(0, "teste");
    });

    expect(result.current.values[0]).toEqual("teste");
  });

  test("Should set correct result", () => {
    const { result } = renderHook(() => useCalculate());
    const resulted = bhaskara([1, 1, 0]);

    act(() => {
      result.current.setResult(resulted);
    });

    expect(result.current.result).toEqual([0, -1]);
  });

  test("should clear values and results", () => {
    const { result } = renderHook(() => useCalculate());
    act(() => {
      result.current.clear();
    });

    expect(result.current.values).toEqual([]);
    expect(result.current.result).toEqual("");
  });
});
