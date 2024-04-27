import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FlexContainerAdapter, FlexContainerCenter, FlexContainerSpaceBTW } from './index';

const Components = [
  {
    name: "FlexContainerAdapter",
    Component: FlexContainerAdapter
  },
  {
    name: "FlexContainerCenter",
    Component: FlexContainerCenter
  },
  {
    name: "FlexContainerSpaceBTW",
    Component: FlexContainerSpaceBTW
  }
]

describe("InputConverter Component", () => {
  test.each(Components)(
    "%s should be in the document", ({ name, Component }) => {
      const { getByText } = render(<Component>{name}</Component>)

      expect(getByText(name)).toBeInTheDocument();
    })
})
