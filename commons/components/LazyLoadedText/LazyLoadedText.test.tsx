import { render } from "@testing-library/react";
import LazyLoadedText from "./index";
import { toBeInTheDocument } from "../../tests";

const Component = render(<LazyLoadedText>teste</LazyLoadedText>);

toBeInTheDocument({
  Element: Component,
  describeText: "LazyLoadedText component",
  fn: "getByText",
  text: "teste",
});
