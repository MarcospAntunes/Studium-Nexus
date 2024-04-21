/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ConverterReducer } from "../../reducers";
import { useEffect, useReducer } from "react";

function useConverterReducer(slug: string) {
  const [state, dispatch] = useReducer(ConverterReducer, { slug });
  useEffect(() => {
    dispatch();
  }, []);

  const namesOfUnits: string[] = Object.keys(state);
  const valuesOfUnits: string[] = Object.values(state);

  return {
    namesOfUnits,
    valuesOfUnits,
    state,
  };
}

export default useConverterReducer;
