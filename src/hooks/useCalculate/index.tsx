"use client"

import { arithmeticAverage, bhaskara } from "@/utils";
import { useState } from "react";

function useCalculate() {
    const [result, setResult] = useState<any>();
    const [values, setValues] = useState<any[]>([]);

    const operations: any = {
        'bhaskara': () => bhaskara([values[0], values[1], values[2]]),
        'media-aritmetica': () => arithmeticAverage(values[0]),
    }

    const addNewValue = (index: number, newValue: any) => {
        const newArray = [...values];
        newArray[index] = newValue
        setValues(newArray);
    }

    const calculate = (operation: any) => {
        if(operation) {
            const calculation = operations[operation]
            setResult(calculation);
        }
    };

    const clear: VoidFunction = () => {
        setResult("")
        setValues([])
    }

    return {
        values,
        result,
        addNewValue,
        calculate,
        clear
    }
}

export default useCalculate