import { renderHook } from "@testing-library/react";
import useTimer from "./index";

describe("useTimer hook", () => {
  const { result } = renderHook(() => useTimer());
  const currentResult = result.current;

  test("Should be return correct values", () => {
    expect(currentResult.isActive).toBe(false);
    expect(currentResult.currentTimer.currentTimer).toBe("pomodoro");
    expect(currentResult.timer).toBe(25 * 60);
  });
});
