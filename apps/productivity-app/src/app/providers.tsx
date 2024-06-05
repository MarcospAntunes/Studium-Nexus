"use client";

import { TodoProvider } from "../contexts";

function Providers({ children }: any) {
  return <TodoProvider>{children}</TodoProvider>;
}

export default Providers;
