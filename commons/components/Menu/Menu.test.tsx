import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./index";

describe("Menu Component", () => {
  test("Should be in the document", () => {
    const Component = render(<Menu />);
    const menu = Component.getByRole("menu");

    expect(menu).toBeInTheDocument();
  });
  test("Should to change the right value", () => {
    const Component = render(<Menu />);
    const menu = Component.getByRole("menu");
    const button = Component.getByRole("button");

    let isOpen = false;

    button.addEventListener("click", () => {
      isOpen = !isOpen;
      menu.style.right = isOpen ? "0vw" : "-100vw";
    });
    fireEvent.click(button);
    expect(menu).toHaveStyle("right: 0vw;");

    fireEvent.click(button);
    expect(menu).toHaveStyle("right: -100vw;");
  });
});
