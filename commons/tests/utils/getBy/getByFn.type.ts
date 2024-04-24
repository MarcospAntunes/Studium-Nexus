import { RenderResult } from "@testing-library/react"

type getByFnProps = {
  Element: RenderResult< typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>
  fn: 'getByText' | 'container'
  text?: string
  tag?: string
}


export default getByFnProps;
