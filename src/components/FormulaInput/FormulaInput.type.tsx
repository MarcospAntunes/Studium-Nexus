import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"
import { DefaultTheme } from "styled-components"

type FormulaInputProps = {
    type: HTMLInputTypeAttribute | undefined 
    placeholder: string | undefined
    value: string | number | readonly string[] | undefined 
    onChange: ChangeEventHandler<HTMLInputElement> | undefined 
    required: boolean | undefined
    aria_label: string | undefined
}

export default FormulaInputProps;