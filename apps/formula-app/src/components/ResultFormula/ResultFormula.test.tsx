import { render } from "@testing-library/react";
import ResultFormula from "./index";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(<ResultFormula>0</ResultFormula>);

toBeInTheDocument({
  Element: Component,
  describeText: "ResultFormula Component",
  fn: "getByText",
  text: "0",
});
