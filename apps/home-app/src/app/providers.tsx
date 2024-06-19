"use client";

import { Children } from "@studium-nexus/types-commons";
import {
  SearchProvider,
  ChangeLayoutProvider,
  ThemeProvider,
} from "../contexts";

function Providers({ children }: Children) {
  return (
    <ThemeProvider>
      <SearchProvider>
        <ChangeLayoutProvider>{children}</ChangeLayoutProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default Providers;
