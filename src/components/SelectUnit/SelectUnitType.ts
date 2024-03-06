import { ChangeEventHandler, Dispatch, SetStateAction } from "react"
import { DefaultTheme } from "styled-components"

type SelectUnitProps = {
    arrayOfUnits: Array<string> | Array<unknown>
    name: string
    id: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    theme?: DefaultTheme | undefined
    defaultValue: string | null,
    setOrigin?: Dispatch<SetStateAction<string>>
}

export default SelectUnitProps;