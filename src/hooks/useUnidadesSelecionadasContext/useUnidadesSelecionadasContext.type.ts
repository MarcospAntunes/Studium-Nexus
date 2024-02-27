import { Dispatch, SetStateAction } from "react"

type UnidadesSelecionadasProps = {
    unidade: Array<string>
    setUnidade: Dispatch<SetStateAction<Array<string>>>
}

export default UnidadesSelecionadasProps