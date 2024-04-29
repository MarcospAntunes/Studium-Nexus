import { renderHook } from "@testing-library/react";
import { ThemeContext } from "../../contexts";
import useTheme from "./index";

const themeContextValue = {
  theme: "dark",
  setTheme: jest.fn(),
  themeToggler: jest.fn(),
};

describe("useTheme hook", () => {
  const { result } = renderHook(() => useTheme(), {
    wrapper: ({ children }) => (
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>
    ),
  });
  const currentResult = result.current;

  test("should be return correct values of theme", () => {
    expect(currentResult.theme).toBe("dark");
    expect(typeof currentResult.setTheme).toBe("function");
    expect(typeof currentResult.themeToggler).toBe("function");
  });

  test("should call themeToggler", () => {
    currentResult.themeToggler("light");

    expect(themeContextValue.themeToggler).toHaveBeenCalledWith("light");
  });
});
