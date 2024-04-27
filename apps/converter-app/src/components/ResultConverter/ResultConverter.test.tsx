import { render } from "@testing-library/react";
import ResultConverter from "./index";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(<ResultConverter aria_live="off">0</ResultConverter>);

toBeInTheDocument({
  Element: Component,
  describeText: "ResultConverter Component",
  fn: "getByText",
  text: "0",
});
