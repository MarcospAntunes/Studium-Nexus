"use client"

import { useEffect } from "react";
import SelectStyled from "./SelectUnit.style";
import SelectUnitProps from "./SelectUnitType";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function SelectUnit({arrayOfUnits, name, id, onChange, defaultValue = null, setOrigin}: SelectUnitProps): JSX.Element {
    const unitDocumentAttached: string = defaultValue ? defaultValue : "";
    const unitsFiltred: unknown[] = arrayOfUnits.filter((unit) => {
        return unit !== unitDocumentAttached
    })

    const { theme } = useTheme();

    useEffect(() => {
        if(setOrigin && defaultValue) setOrigin(defaultValue)
    }, [defaultValue, setOrigin])

    return(
        <SelectStyled name={name} id={id} onChange={onChange} theme={theme === 'light' ? lightTheme : darkTheme} role="listbox">
            <option value={unitDocumentAttached} aria-live="polite">{unitDocumentAttached ? unitDocumentAttached : name}</option>
            {unitsFiltred.map((unit: any, index) => (
                <option key={index} value={unit} role="option">{unit}</option>
            ))}
        </SelectStyled>
    )
}

export default SelectUnit;