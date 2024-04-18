import { ReactNode } from "react"

type ExistingRoutesProps = {
  children: ReactNode
  slug: string
  routes: { [key: string]: Object }
}

export default ExistingRoutesProps;
