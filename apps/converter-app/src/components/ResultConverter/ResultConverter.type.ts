import { ReactNode } from "react";

type ResultConverterProps = {
  children: ReactNode;
  aria_live?: "off" | "assertive" | "polite" | undefined;
};

export default ResultConverterProps;
