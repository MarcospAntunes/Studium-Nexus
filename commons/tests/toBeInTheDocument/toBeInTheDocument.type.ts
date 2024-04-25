import { Matcher, RenderResult } from "@testing-library/react"

type toBeInTheDocumentProps = {
  Element: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>
  fn: 'getByText' | 'container' | 'getByTestId'
  text?: string
  tag?: string
  id?: Matcher
  describeText: string | number | Function | jest.FunctionLike,
}

export default toBeInTheDocumentProps;
