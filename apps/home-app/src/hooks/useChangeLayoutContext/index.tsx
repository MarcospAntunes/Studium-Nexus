"use client";

import { useContext } from "react";
import { ChangeLayoutContext } from "../../contexts";
import ChangeLayoutContextProps from "../../contexts/ChangeLayoutContext/ChangeLayout.type";

function useChangeLayoutContext() {
  const { layout, setLayout }: ChangeLayoutContextProps =
    useContext(ChangeLayoutContext);

  return { layout, setLayout };
}

export default useChangeLayoutContext;
