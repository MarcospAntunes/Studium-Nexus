import { fireEvent, render } from '@testing-library/react';
import Button from "./index";
import "@testing-library/jest-dom";

const handleClick = jest.fn();

const Component = render(
  <Button
    key=""
    role="button"
    type="button"
    onClick={handleClick}
  >
    Button
  </Button>
);
const button = Component.getByText("Button");
fireEvent.click(button);

describe("Button component", () => {
  test("should be in the document", () => {
    expect(button).toBeInTheDocument();
  });
  test("should event callend", () => {
    expect(handleClick).toHaveBeenCalled();
  });
});
