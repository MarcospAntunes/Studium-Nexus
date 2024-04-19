import React from "react";
import {
  ArithmeticAverage,
  Bhaskara,
  SimpleInterest,
  CompoundInterest,
} from "../../screens";

type Pages = {
  [key: string]: {
    title: string;
    Page: () => React.JSX.Element;
  };
};

const formulasPages: Pages = {
  bhaskara: {
    title: "Bhaskara",
    Page: Bhaskara,
  },
  "media-aritmetica": {
    title: "Média Aritmética",
    Page: ArithmeticAverage,
  },
  "juros-simples": {
    title: "Juros Simples",
    Page: SimpleInterest,
  },
  "juros-compostos": {
    title: "Juros Compostos",
    Page: CompoundInterest,
  },
};

export default formulasPages;
