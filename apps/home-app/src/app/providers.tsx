"use client";

import {
  ThemeProvider,
  SearchProvider,
  ChangeLayoutProvider,
} from "../contexts";

function Providers({ children }: any) {
  return (
    <ThemeProvider>
      <SearchProvider>
        <ChangeLayoutProvider>{children}</ChangeLayoutProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default Providers;
