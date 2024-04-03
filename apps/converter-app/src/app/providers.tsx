"use client"

import { UnitSelectedProvider } from "../contexts";

function Providers({ children }: any) {
    return (
        <UnitSelectedProvider>
            {children}
        </UnitSelectedProvider>
    )
}

export default Providers;