import bhaskara from "@/utils/formulas/bhaskara";
import { useState } from "react";

function useCalculate() {
    const [result, setResult] = useState<any>();
    const [values, setValues] = useState<number[]>([]);

    const operations: any = {
        'bhaskara': () => bhaskara([values[0], values[1], values[2]]),
    }

    const addNewValue = (index: number, newValue: number) => {
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

    const clear = () => {
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