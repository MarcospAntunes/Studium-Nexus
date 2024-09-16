"use client";

import { ChartProvider, TodoProvider } from "../contexts";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return (
    <TodoProvider>
      <ChartProvider>{children}</ChartProvider>
    </TodoProvider>
  );
}

export default Providers;
