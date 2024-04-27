import { render } from "@testing-library/react";
import { toBeInTheDocument } from "../../tests";
import AppContainer from ".";

const Component = render(
  <AppContainer>
    test
  </AppContainer>
)

toBeInTheDocument({
  Element: Component,
  describeText: "AppContainer Component",
  fn: "getByText",
  text: "test"
})
