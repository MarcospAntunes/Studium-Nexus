import { render } from "@testing-library/react";
import MenuButton from ".";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(<MenuButton isopen="true" role="button" />);

toBeInTheDocument({
  Element: Component,
  describeText: "MenuButton Component",
  fn: "getByRole",
  role: "button",
});
