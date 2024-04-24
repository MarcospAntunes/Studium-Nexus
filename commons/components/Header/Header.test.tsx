import { render } from '@testing-library/react';
import Header from './index';
import '@testing-library/jest-dom'
import { toBeInTheDocument } from '../../tests';

const Component = render(
  <Header />
)

toBeInTheDocument({ 
  Element: Component,
  fn: "container",
  tag: "header",
  describeText: "Header Component Test",
})
