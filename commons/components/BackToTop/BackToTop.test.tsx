import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BackToTopButton, BackToTopContainer } from "./BackToTop.style";

describe("BackToTop Component", () => {
  test("should not be in the document", () => {
    const { container } = render(
      <BackToTopContainer>
        {scrollY === 0 ? null : <BackToTopButton>^</BackToTopButton>}
      </BackToTopContainer>,
    );
    const button = container.querySelector("button");
    expect(button).not.toBeInTheDocument();
  });
  test("should be in the document", () => {
    fireEvent.scroll(window, { target: { scrollY: 150 } });
    const { container } = render(
      <BackToTopContainer>
        {scrollY === 0 ? null : <BackToTopButton>^</BackToTopButton>}
      </BackToTopContainer>,
    );
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();
  });
});
