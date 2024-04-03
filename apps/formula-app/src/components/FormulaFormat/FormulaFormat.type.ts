import { ReactNode } from "react"

type FormulaFormatProps = {
    children: ReactNode
    aria_label?: string | undefined
    aria_live?: "polite" | "off" | "assertive" | undefined
}

export default FormulaFormatProps;