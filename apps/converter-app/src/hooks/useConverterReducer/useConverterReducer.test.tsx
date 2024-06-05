import useConverterReducer from "./index";
import { renderHook } from "@testing-library/react";

describe("useConverterReduce hook", () => {
  test("Should return the Correct values", () => {
    const { result } = renderHook(() => useConverterReducer("tempo"));
    expect(result.current.state).toEqual({
      seculo: 0.01,
      ano: 1,
      mes: 12,
      semana: 52.143,
      dia: 365,
      hora: 8760,
      minuto: 525600,
      segundo: 31622400,
      milessegundo: 31536000000,
    });
  });
});
