import { render } from "@testing-library/react";
import FormulaImage from "./index";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(
  <FormulaImage
    alt="imagetest"
    src="/images/equation1.png"
  />
)

toBeInTheDocument({
  Element: Component,
  describeText: "FormulaImage Component",
  fn: "getByAltText",
  alt: "imagetest"
})

