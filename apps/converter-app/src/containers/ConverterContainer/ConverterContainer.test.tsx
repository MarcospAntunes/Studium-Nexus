import { render } from "@testing-library/react";
import ConverterContainer from "./index";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(
  <ConverterContainer>
    <p>test</p>
  </ConverterContainer>
)


toBeInTheDocument({
  Element: Component,
  describeText: "ConverterContainer component",
  fn: 'getByText',
  text: "test"
})
