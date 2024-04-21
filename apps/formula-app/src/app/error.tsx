"use client"

import { Button } from "@studium-nexus/components-commons"
import ErrorScreen from '@studium-nexus/screens-commons/ErrorScreen'


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <ErrorScreen>
      <h2>Algo deu errado  durante os calculos</h2>
      <Button
        onClick={
          () => reset()
        }
      >
        Tente novamente
      </Button>
      <p>{error.message}</p>
    </ErrorScreen>
  )
}
