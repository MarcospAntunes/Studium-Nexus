import { FormEvent } from "react";

type handleSubmitProps = {
  e: FormEvent<HTMLFormElement>;
  feedbackType: string;
  selectedfunctionalities: string[];
  describeBug: string;
  suggestionsForImprovements: string;
  clear: () => void;
};

export default handleSubmitProps;
