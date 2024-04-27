import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./index";

const scrollToSection = jest.fn()

describe("Navigation Component", () => {
  test("Should be in the document", () => {
    const Component = render(<Navigation />);
    const nav = Component.container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });

  test("Should scrollToSection have been called", () => {
    const Component = render(<Navigation />);
    const link = Component.getByText("Como foi criada");
    link.addEventListener("click", () => {
      scrollToSection();
    })

    fireEvent.click(link);
    expect(scrollToSection).toHaveBeenCalled();
  })
})
