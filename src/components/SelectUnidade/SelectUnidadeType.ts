import { ChangeEventHandler } from "react"
import { DefaultTheme } from "styled-components"

type SelectUnidadeProps = {
    arrayDeUnidades: Array<string> 
    name: string
    id: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    theme?: DefaultTheme | undefined
    defaultValue: string | null
}

export default SelectUnidadeProps;