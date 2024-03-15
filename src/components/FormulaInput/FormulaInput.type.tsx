import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

type FormulaInputProps = {
    type: HTMLInputTypeAttribute | undefined 
    placeholder: string | undefined
    value: string | number | readonly string[] | undefined 
    onChange: ChangeEventHandler<HTMLInputElement> | undefined 
    required: boolean | undefined
    aria_label: string | undefined
    width: number
}

export default FormulaInputProps;