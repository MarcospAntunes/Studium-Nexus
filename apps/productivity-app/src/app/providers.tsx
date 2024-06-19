"use client";

import { ThemeProvider } from "@studium-nexus/contexts-commons";
import { TodoProvider } from "../contexts";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return (
    <ThemeProvider>
      <TodoProvider>{children}</TodoProvider>
    </ThemeProvider>
  );
}

export default Providers;
