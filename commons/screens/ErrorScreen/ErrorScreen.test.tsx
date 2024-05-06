import { render } from "@testing-library/react";
import ErrorScreen from "./index";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(<ErrorScreen>test erro</ErrorScreen>);

toBeInTheDocument({
  Element: Component,
  describeText: "Error Screen",
  fn: "getByText",
  text: "test erro",
});
