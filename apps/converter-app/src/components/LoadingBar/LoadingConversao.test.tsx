import { render } from "@testing-library/react";
import LoadingConversao from "./index";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";

const Component = render(<LoadingConversao percentage={100} />);

toBeInTheDocument({
  Element: Component,
  describeText: "LoadingConversao Component",
  fn: "getByRole",
  role: "progressbar",
});
