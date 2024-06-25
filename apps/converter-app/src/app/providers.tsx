"use client";
import { UnitSelectedProvider } from "../contexts";
import { Children } from "@studium-nexus/types-commons";

function Providers({ children }: Children) {
  return <UnitSelectedProvider>{children}</UnitSelectedProvider>;
}

export default Providers;
