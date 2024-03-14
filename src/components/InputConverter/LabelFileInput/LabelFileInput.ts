import { AriaRole, ReactNode } from "react";

type LabelFileInputProps = {
    children: ReactNode 
    htmlFor:  string
    role?: AriaRole | undefined
}

export default LabelFileInputProps;