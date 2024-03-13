/* eslint-disable react-hooks/exhaustive-deps */

import { FormulaReducer } from "@/reducers/index";
import { useEffect, useReducer } from "react";

function useFormulaReducer(slug: string) {
    const [state, dispatch] = useReducer(FormulaReducer, {slug});
    useEffect(() => {
      dispatch({type: slug})
    }, [])

    const type = "Symbol(react.element)"
    const validate = state?.component?.$$typeof.toString() === type

    const Component = validate ? state.component : <p>...</p> 

    return {
        Component
    }
}

export default useFormulaReducer;