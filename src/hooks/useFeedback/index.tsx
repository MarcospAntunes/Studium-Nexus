"use client";

import { useContext } from "react";
import { FeedbackContext } from "../../app/contexts";

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
  };
}

export default useFeedback;
