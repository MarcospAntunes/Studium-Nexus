
import ArithmeticAverage from "../../screens/arithmeticAverage";
import Bhaskara from "../../screens/bhaskaraScreen";
import React from "react";
import SimpleInterest from '../../screens/simpleInterest'

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