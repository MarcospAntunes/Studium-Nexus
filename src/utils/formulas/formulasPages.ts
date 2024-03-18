
import ArithmeticAverage from "@/screens/arithmeticAverage";
import Bhaskara from "@/screens/bhaskaraScreen";
import React from "react";

type Pages = {
    [key: string]: {
        title: string,
        Page: () => React.JSX.Element
    }
}

const formulasPages: Pages = {
    bhaskara: {
        title: 'Bhaskara',
        Page: Bhaskara
    },
    "media-aritmetica": {
        title: 'Média Aritmética',
        Page: ArithmeticAverage
    },
}

export default formulasPages