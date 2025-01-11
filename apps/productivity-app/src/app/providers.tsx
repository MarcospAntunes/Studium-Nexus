"use client";

import { CalendarProvider, ChartProvider, TodoProvider } from "../contexts";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return (
    <TodoProvider>
      <ChartProvider>
        <CalendarProvider>{children}</CalendarProvider>
      </ChartProvider>
    </TodoProvider>
  );
}

export default Providers;
