"use client";

import { ThemeProvider } from "@studium-nexus/contexts-commons";

function Providers({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
