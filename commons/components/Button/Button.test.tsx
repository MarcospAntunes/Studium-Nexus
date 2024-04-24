import { fireEvent, render } from '@testing-library/react';
import Button from "./index";
import "@testing-library/jest-dom";
import { toBeInTheDocument } from '../../tests';

const handleClick = jest.fn();

const Element = render(
  <Button
    key=""
    role="button"
    type="button"
    onClick={handleClick}
  >
    Button
  </Button>
);
const button = Element.getByText("Button");
fireEvent.click(button);

toBeInTheDocument({ 
  Element, 
  fn: "getByText", 
  tag: "button", 
  text: "Button", 
  describeText: "Button component" 
})

describe("Button component", () => {
  test("should event callend", () => {
    expect(handleClick).toHaveBeenCalled();
  });
});
