"use client";

import { ThemeProvider } from "@studium-nexus/contexts-commons";
import { TodoProvider } from "../contexts";

function Providers({ children }: any) {
  return (
    <ThemeProvider>
      <TodoProvider>{children}</TodoProvider>
    </ThemeProvider>
  );
}

export default Providers;
