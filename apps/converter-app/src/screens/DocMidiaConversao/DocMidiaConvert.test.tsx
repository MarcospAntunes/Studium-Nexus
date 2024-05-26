import { render } from "@testing-library/react";
import DocMidiaConvertScreen from ".";
import { toBeInTheDocument } from "@studium-nexus/tests-commons";
import { UnitSelectedContext } from "../../contexts";

const unitContextValue = {
  units: ["cm", "m", "dm", "mm"],
  setUnit: jest.fn(),
};

const Component = render(
  <UnitSelectedContext.Provider value={unitContextValue}>
    <DocMidiaConvertScreen params={{ slug: "documento" }} />
  </UnitSelectedContext.Provider>
);

toBeInTheDocument({
  Element: Component,
  describeText: "DocMidiaConverter Screen",
  fn: "getByText",
  text: "limpar"
})
