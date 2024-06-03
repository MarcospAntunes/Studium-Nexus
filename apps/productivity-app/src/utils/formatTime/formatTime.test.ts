import formatTime from "./index";

describe("formatTime test", () => {
  test("Should return correct value", () => {
    const pomodoroTime = formatTime(25 * 60);
    const shortBreakTime = formatTime(5 * 60);
    const longBreakTime = formatTime(30 * 60);

    expect(pomodoroTime).toBe("25:00");
    expect(shortBreakTime).toBe("05:00");
    expect(longBreakTime).toBe("30:00");
  });
});
