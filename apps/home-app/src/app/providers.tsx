"use client";

import { ThemeProvider, SearchProvider } from "../contexts";

function Providers({ children }: any) {
  return (
    <ThemeProvider>
      <SearchProvider>{children}</SearchProvider>
    </ThemeProvider>
  );
}

export default Providers;
