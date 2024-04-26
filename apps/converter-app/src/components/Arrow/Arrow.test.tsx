import { toBeInTheDocument } from '@studium-nexus/tests-commons'
import Arrow from './index'
import { render } from '@testing-library/react'

const Component = render(<Arrow />)


toBeInTheDocument({
  Element: Component,
  fn: 'getByAltText',
  alt: "arrow",
  describeText: "Arrow Component"

})
