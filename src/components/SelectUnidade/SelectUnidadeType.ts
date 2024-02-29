import { ChangeEventHandler, Dispatch, SetStateAction } from "react"
import { DefaultTheme } from "styled-components"

type SelectUnidadeProps = {
    arrayDeUnidades: Array<string> | Array<unknown>
    name: string
    id: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    theme?: DefaultTheme | undefined
    defaultValue: string | null,
    setOrigem?: Dispatch<SetStateAction<string>>
}

export default SelectUnidadeProps;