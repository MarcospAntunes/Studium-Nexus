import { RenderResult } from "@testing-library/react"

type toBeInTheDocumentProps = {
  Element: RenderResult<typeof import("c:/Users/silvmar13/Documents/GitHub/Studium-Nexus/node_modules/@testing-library/dom/types/queries"), HTMLElement, HTMLElement>
  fn: 'getByText' | 'container'
  text?: string
  tag?: string
  describeText: string | number | Function | jest.FunctionLike,
}

export default toBeInTheDocumentProps;
