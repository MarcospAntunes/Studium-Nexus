"use client";

import { TodoProvider } from "../contexts";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return <TodoProvider>{children}</TodoProvider>;
}

export default Providers;
