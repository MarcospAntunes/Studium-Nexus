import { Matcher, RenderResult } from "@testing-library/react"
import { AriaRole } from "react"

type toBeInTheDocumentProps = {
  Element: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>
  fn: 'getByText' | 'container' | 'getByTestId' | 'getByAltText' | 'getByPlaceholderText' | 'getByRole'
  text?: string
  tag?: string
  id?: Matcher
  describeText: string | number | Function | jest.FunctionLike,
  alt?: string
  placeholder?: string
  role?: AriaRole
}

export default toBeInTheDocumentProps;
