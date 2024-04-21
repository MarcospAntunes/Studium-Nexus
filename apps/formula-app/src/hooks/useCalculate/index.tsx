"use client";

import { useState } from "react";

function useCalculate() {
  const [result, setResult] = useState<any>();
  const [values, setValues] = useState<any[]>([]);

  const addNewValue = (index: number, newValue: any) => {
    const newArray = [...values];
    newArray[index] = newValue;
    setValues(newArray);
  };

  const clear: () => void = () => {
    setResult("");
    setValues([]);
  };

  return {
    values,
    result,
    setResult,
    addNewValue,
    clear,
  };
}

export default useCalculate;
