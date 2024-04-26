import { fireEvent, render } from "@testing-library/react";
import SelectUnit from ".";

const Component = render(
  <SelectUnit
    name="metrics"
    id="test"
    arrayOfUnits={["cm", "m"]}
    defaultValue=""
    onChange={() => ""}
  />
);
const element = Component.getByRole("listbox");

describe("SelectUnit Component", () => {
  test("Should be in the document", () => {
    expect(element).toBeInTheDocument();
  });
  test("should select item", () => {
    fireEvent.change(element, {
      target: {
        value: "cm",
      },
    });
  });
});
