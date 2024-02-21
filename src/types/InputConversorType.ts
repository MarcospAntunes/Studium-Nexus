import { ChangeEventHandler } from "react"

type InputConversorProps = {
    type: string
    name: string
    id: string
    placeholder?: string
    required: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    value: any
}

export default InputConversorProps;