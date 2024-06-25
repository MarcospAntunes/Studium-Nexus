"use client";

import { FeedbackProvider } from "../contexts";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return <FeedbackProvider>{children}</FeedbackProvider>;
}

export default Providers;
