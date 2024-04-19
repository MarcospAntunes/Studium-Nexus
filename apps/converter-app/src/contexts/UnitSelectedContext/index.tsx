"use client";

import UnitSelectedContextProps from "../../hooks/useUnitsSelectedContext/useUnidadesSelecionadasContext.type";
import { Children } from "@studium-nexus/types-commons";
import { createContext, useState } from "react";

const UnitSelectedContext = createContext<UnitSelectedContextProps | any>("");
UnitSelectedContext.displayName = "UnidadeSelecionada";

function UnitSelectedProvider({ children }: Children): JSX.Element {
  const [unit, setUnit] = useState<string[]>([]);

  return (
    <UnitSelectedContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitSelectedContext.Provider>
  );
}

export { UnitSelectedContext, UnitSelectedProvider };
