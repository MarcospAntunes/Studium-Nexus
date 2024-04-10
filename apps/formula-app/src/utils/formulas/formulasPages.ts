import React from "react";
import { ArithmeticAverage, Bhaskara, SimpleInterest } from '../../screens'


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
    "juros-simples": {
        title: 'Juros Simples',
        Page: SimpleInterest
    },
}

export default formulasPages