import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectUnit from ".";

const Component = render(
  <SelectUnit
    name="metrics"
    id="test"
    arrayOfUnits={["cm", "m"]}
    defaultValue=""
    onChange={() => ""}
  />,
);
const element = Component.container.querySelector("select")!;

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
    expect(element.value).toBe("cm");
  });
});
