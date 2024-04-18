import { AriaRole, MouseEventHandler, ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
  role?: AriaRole | undefined
  type?: "button" | "submit" | "reset" | undefined
}

export default ButtonProps;
