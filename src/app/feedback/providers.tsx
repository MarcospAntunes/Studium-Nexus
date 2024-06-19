"use client";

import { ThemeProvider } from "@studium-nexus/contexts-commons";
import { FeedbackProvider } from "../contexts";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return (
    <ThemeProvider>
      <FeedbackProvider>{children}</FeedbackProvider>
    </ThemeProvider>
  );
}

export default Providers;
