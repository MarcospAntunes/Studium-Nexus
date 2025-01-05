"use client";

import { Children } from "@studium-nexus/types-commons";
import { createContext, useEffect, useState } from "react";
import FeedbackContextProps from "./feedbackContextProps.type";

const FeedbackContext = createContext<FeedbackContextProps>({
  selectedfunctionalities: [""],
  feedbackType: "",
  describeBug: "",
  suggestionsForImprovements: "",
  formData: {},
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

  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      tipoDeFeedback: feedbackType,
      ferramentaComBug: selectedfunctionalities,
      bug: describeBug,
      seguestao: suggestionsForImprovements,
    });
  }, [
    describeBug,
    feedbackType,
    selectedfunctionalities,
    suggestionsForImprovements,
  ]);

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
        formData,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackProvider, FeedbackContext };
