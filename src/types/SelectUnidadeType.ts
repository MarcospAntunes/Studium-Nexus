import { ChangeEventHandler } from "react"

type SelectUnidadeProps = {
    arrayDeUnidades: Array<string> 
    name: string
    id: string
    onChange: ChangeEventHandler<HTMLSelectElement>
}

export default SelectUnidadeProps;