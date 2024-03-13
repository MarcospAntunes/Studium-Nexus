import Bhaskara from "@/screens/bhaskaraScreen";

type Pages = {
    [key: string]: () => JSX.Element
}

const formulasPages: Pages = {
    bhaskara: Bhaskara,
}

export default formulasPages