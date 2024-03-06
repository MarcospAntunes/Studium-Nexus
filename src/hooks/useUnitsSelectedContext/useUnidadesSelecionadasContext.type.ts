import { Dispatch, SetStateAction } from "react"

type UnitSelectedContextProps = {
    unit: Array<string>
    setUnit: Dispatch<SetStateAction<Array<string>>>
}

export default UnitSelectedContextProps