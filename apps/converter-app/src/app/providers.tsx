"use client";

import { ThemeProvider } from "@studium-nexus/contexts-commons";
import { UnitSelectedProvider } from "../contexts";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return (
    <ThemeProvider>
      <UnitSelectedProvider>{children}</UnitSelectedProvider>
    </ThemeProvider>
  );
}

export default Providers;
