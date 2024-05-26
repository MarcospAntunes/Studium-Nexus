"use client";

import { Children } from "@studium-nexus/types-commons";
import { createContext, useState } from "react";
import ChangeLayoutContextProps from "./ChangeLayout.type";

const ChangeLayoutContext = createContext<ChangeLayoutContextProps | any>(true);
ChangeLayoutContext.displayName = "ChangeLayout";

function ChangeLayoutProvider({ children }: Children): JSX.Element {
  const [layout, setLayout] = useState<boolean>(true);

  return (
    <ChangeLayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </ChangeLayoutContext.Provider>
  );
}

export { ChangeLayoutContext, ChangeLayoutProvider };
