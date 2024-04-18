"use client"

import { verifyRoutes } from "../../utils"
import { useRouter } from "next/navigation"
import ExistingRoutesProps from "./ExistingRoutes.type";
import React, { useEffect } from "react";

function ExistingRoutes({ children, routes, slug }: ExistingRoutesProps) {
  const { push } = useRouter();
  const result = verifyRoutes(routes, slug)

  useEffect(() => {
    if (!result) {
      push(`/?404=not-found_${slug}`)
    }

  }, [push, result, slug])

  return (
    <>
      {!result && null}
      {result && children}
    </>
  )
}

export default ExistingRoutes;

