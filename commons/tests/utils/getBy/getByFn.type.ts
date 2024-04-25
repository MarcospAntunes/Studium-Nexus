import { Matcher, RenderResult } from "@testing-library/react"

type getByFnProps = {
  Element: RenderResult< typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>
  fn: 'getByText' | 'container' | 'getByTestId'
  text: string
  tag: string
  id: Matcher
}


export default getByFnProps;
