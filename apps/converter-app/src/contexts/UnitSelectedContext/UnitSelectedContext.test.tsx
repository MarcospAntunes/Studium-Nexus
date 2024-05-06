import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UnitSelectedContext } from "./index";
import React from "react";

jest.mock("./index");

const unitContextValue = {
  units: ["cm", "m", "dm", "mm"],
  setUnit: jest.fn(),
};

function GenericSelect() {
  const { units } = React.useContext(UnitSelectedContext);

  return (
    <select>
      <option value="" defaultChecked></option>
      {units.map((unit: string, index: number) => (
        <option key={index} value={unit} role="option">
          {unit}
        </option>
      ))}
    </select>
  );
}

describe("Theme Context test", () => {
  test("displays mocked context value", () => {
    const context = render(
      <UnitSelectedContext.Provider value={unitContextValue}>
        <GenericSelect />
      </UnitSelectedContext.Provider>,
    );

    expect(context.getByText("cm")).toBeInTheDocument();
  });
});
