import { render } from "@testing-library/react";
import FormulaFormat from "./index";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(<FormulaFormat>1 + 1</FormulaFormat>);

toBeInTheDocument({
  Element: Component,
  describeText: "FormulaFormatComponent",
  fn: "getByText",
  text: "1 + 1"
});
