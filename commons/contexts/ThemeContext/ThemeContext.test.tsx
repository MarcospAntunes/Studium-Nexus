import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { ThemeContext } from "./index";
import React from "react";

jest.mock("./index");

const themeContextValue = {
  theme: "dark",
  setTheme: jest.fn(),
  themeToggler: jest.fn()
};

function GenericComponent() {
  const { theme } = React.useContext(ThemeContext);
  return <div>{theme}</div>;
}

describe('Theme Context test', () => { 
  test('displays mocked context value', () => {
   const context = render(
      <ThemeContext.Provider value={ themeContextValue }>
        <GenericComponent/>
      </ThemeContext.Provider>
    );

    expect(context.getByText('dark')).toBeInTheDocument();
  });
})
