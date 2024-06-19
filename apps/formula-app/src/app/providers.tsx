"use client";

import { ThemeProvider } from "@studium-nexus/contexts-commons";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
