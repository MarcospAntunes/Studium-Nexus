import { render } from "@testing-library/react";
import FormulaInput from "./index";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(
  <FormulaInput
    type="number"
    placeholder="Input test"
    value=""
    width={0}
    onChange={() => "test"}
    required={false}
    aria_label="input test"
  />,
);

toBeInTheDocument({
  Element: Component,
  describeText: "FormulaInput Component",
  fn: "getByPlaceholderText",
  placeholder: "Input test",
});
