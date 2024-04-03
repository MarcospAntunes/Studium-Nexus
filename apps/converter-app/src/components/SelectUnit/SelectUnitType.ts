import { ChangeEventHandler, Dispatch, SetStateAction } from "react"

type SelectUnitProps = {
    arrayOfUnits: Array<string> | Array<unknown>
    name: string
    id: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    defaultValue: string | null,
    setOrigin?: Dispatch<SetStateAction<string>>
}

export default SelectUnitProps;