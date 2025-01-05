"use client";

import { useContext } from "react";
import { FeedbackContext } from "../../contexts";

function useFeedback() {
  const {
    selectedfunctionalities,
    setSelectedfunctionalities,
    feedbackType,
    setFeedbackType,
    describeBug,
    setDescribeBug,
    suggestionsForImprovements,
    setSuggestionsForImprovements,
    formData,
  } = useContext(FeedbackContext);

  const clear = () => {
    setSelectedfunctionalities!([]);
    setFeedbackType!("");
    setDescribeBug!("");
    setSuggestionsForImprovements!("");
  };

  return {
    selectedfunctionalities,
    setSelectedfunctionalities,
    feedbackType,
    setFeedbackType,
    describeBug,
    setDescribeBug,
    suggestionsForImprovements,
    setSuggestionsForImprovements,
    clear,
    formData,
  };
}

export default useFeedback;
