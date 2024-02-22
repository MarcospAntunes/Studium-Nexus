import { Dispatch, SetStateAction } from "react"

type ThemeProps = {
    themeToggler: (target?: string) => void 
    theme: string
    setTheme: Dispatch<SetStateAction<string>>
}

export default ThemeProps