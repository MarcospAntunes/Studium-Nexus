import { toBeInTheDocument } from "@studium-nexus/tests-commons";
import PomodoroScreen from "./index";
import { render } from "@testing-library/react";

const Component = render(<PomodoroScreen />);

toBeInTheDocument({
  Element: Component,
  describeText: "Pomodoro Screen",
  fn: "getByText",
  text: "Pomodoro",
});
