"use client";

import { ThemeProvider } from "@studium-nexus/contexts-commons";
import { UnitSelectedProvider } from "../contexts";

function Providers({ children }: any) {
  return (
    <ThemeProvider>
      <UnitSelectedProvider>{children}</UnitSelectedProvider>
    </ThemeProvider>
  );
}

export default Providers;
