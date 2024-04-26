import { toBeInTheDocument } from "@studium-nexus/tests-commons";
import LabelFileInput from "./index";
import { render } from "@testing-library/react";

const Component = render(
  <LabelFileInput
    role="button"
    htmlFor="arquivo"
  >
    Carregue o arquivo
  </LabelFileInput>
)


toBeInTheDocument({
  Element: Component,
  describeText: "LabelFileInput Component",
  fn: "getByText",
  text: "Carregue o arquivo"
})
