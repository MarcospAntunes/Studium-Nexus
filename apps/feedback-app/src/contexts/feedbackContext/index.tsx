"use client";

import { Children } from "@studium-nexus/types-commons";
import { createContext, useState } from "react";
import FeedbackContextProps from "./feedbackContextProps.type";

const FeedbackContext = createContext<FeedbackContextProps>({
  selectedfunctionalities: [""],
  feedbackType: "",
  describeBug: "",
  suggestionsForImprovements: "",
});
FeedbackContext.displayName = "Feedback Context";

function FeedbackProvider({ children }: Children) {
  const [selectedfunctionalities, setSelectedfunctionalities] = useState<
    string[]
  >([]);
  const [feedbackType, setFeedbackType] = useState<string>("");
  const [describeBug, setDescribeBug] = useState<string>("");
  const [suggestionsForImprovements, setSuggestionsForImprovements] =
    useState<string>("");

  return (
    <FeedbackContext.Provider
      value={{
        selectedfunctionalities,
        setSelectedfunctionalities,
        feedbackType,
        setFeedbackType,
        describeBug,
        setDescribeBug,
        suggestionsForImprovements,
        setSuggestionsForImprovements,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackProvider, FeedbackContext };
