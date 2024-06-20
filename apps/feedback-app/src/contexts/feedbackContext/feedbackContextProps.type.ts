import { Dispatch, SetStateAction } from "react";

interface FeedbackContextProps {
  selectedfunctionalities: string[];
  setSelectedfunctionalities?: Dispatch<SetStateAction<string[]>>;
  feedbackType: string;
  setFeedbackType?: Dispatch<SetStateAction<string>>;
  describeBug: string;
  setDescribeBug?: Dispatch<SetStateAction<string>>;
  suggestionsForImprovements: string;
  setSuggestionsForImprovements?: Dispatch<SetStateAction<string>>;
}

export default FeedbackContextProps;
