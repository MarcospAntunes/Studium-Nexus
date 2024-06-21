import { render, renderHook, fireEvent } from "@testing-library/react";
import CustomCheckbox from "./index";
import "@testing-library/jest-dom";
import { useFeedback } from "../../hooks";
import { FeedbackContext } from "../../contexts";
import { useState } from "react";

describe("CustomCheckBox Component", () => {
  test("Should be in the document", () => {
    const { getByText } = render(
      <CustomCheckbox
        name="Pomododro"
        htmlFor="Pomododro"
        id="pomododro"
        text="Pomododro"
        onClick={() => ""}
      />,
    );

    expect(getByText("Pomododro")).toBeInTheDocument();
  });

  test("Should add new item", () => {
    const stateSelectedfunctionalities = renderHook(() =>
      useState<string[]>([]),
    );
    const stateFeedbackType = renderHook(() => useState<string>(""));
    const stateDescribeBug = renderHook(() => useState<string>(""));
    const stateSuggestionsForImprovements = renderHook(() =>
      useState<string>(""),
    );

    const resultFeedback = renderHook(() => useFeedback(), {
      wrapper: ({ children }) => (
        <FeedbackContext.Provider
          value={{
            selectedfunctionalities:
              stateSelectedfunctionalities.result.current[0],
            setSelectedfunctionalities:
              stateSelectedfunctionalities.result.current[1],
            feedbackType: stateFeedbackType.result.current[0],
            setFeedbackType: stateFeedbackType.result.current[1],
            describeBug: stateDescribeBug.result.current[0],
            setDescribeBug: stateDescribeBug.result.current[1],
            suggestionsForImprovements:
              stateSuggestionsForImprovements.result.current[0],
            setSuggestionsForImprovements:
              stateSuggestionsForImprovements.result.current[1],
          }}
        >
          {children}
        </FeedbackContext.Provider>
      ),
    });

    const { getByText } = render(
      <CustomCheckbox
        name="Pomododro"
        htmlFor="Pomododro"
        id="pomododro"
        text="Pomododro"
        onClick={() =>
          resultFeedback.result.current.setSelectedfunctionalities!([
            ...resultFeedback.result.current.selectedfunctionalities,
            "Pomodoro",
          ])
        }
      />,
    );
    fireEvent.click(getByText("Pomododro"));

    resultFeedback.rerender();
    expect(resultFeedback.result.current.selectedfunctionalities[0]).toBe(
      "Pomodoro",
    );
  });
});
