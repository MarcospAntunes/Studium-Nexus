import Bhaskara from "@/screens/bhaskaraScreen/Bhaskara.screen";
import FormulaActionProps from "./FormulaReducer.type"

function FormulaReducer( state: any, action: FormulaActionProps) {
    switch(state.slug) {
        case "bhaskara":
            return {
                component: <Bhaskara />
            }
        default:
            return state
    }
}

export default FormulaReducer;