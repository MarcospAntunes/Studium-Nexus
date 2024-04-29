import { render } from "@testing-library/react";
import ResultContainer from ".";
import { toBeInTheDocument } from "../../tests";

const Component = render(<ResultContainer>ResultContainer</ResultContainer>);

toBeInTheDocument({
  Element: Component,
  describeText: "ResultContainer Component",
  fn: "getByText",
  text: "ResultContainer",
});
