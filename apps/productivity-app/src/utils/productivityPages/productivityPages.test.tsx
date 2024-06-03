import productivityPages from "./productivityPages";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const PagesValues = ["pomodoro"];

describe("productivityPages test", () => {
  test.each(PagesValues)("%s should be in the document", (name) => {
    const { Page } = productivityPages[name];
    const { getByText } = render(<Page />);

    expect(getByText("Pomodoro")).toBeInTheDocument();
  });
});
