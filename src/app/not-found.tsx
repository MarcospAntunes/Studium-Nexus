"use client";

import ErrorScreen from "@studium-nexus/screens-commons/ErrorScreen";
import { Button } from "@studium-nexus/converter-app/src/components";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <ErrorScreen>
      <h2>Página não encontrada!</h2>
      <h3>Error 404</h3>
      <p>
        A página que você está tentando acessar não existe ou está
        temporariamente inacessível.
      </p>
      <Button onClick={() => router.push("/")} role="link">
        Rotornar para o início
      </Button>
    </ErrorScreen>
  );
}
