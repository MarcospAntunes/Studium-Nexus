/* eslint-disable react-hooks/exhaustive-deps */

import { FormulaReducer } from "@/reducers/index";
import { FormulaScreenSkeleton } from "@/skeletons";
import { useParams } from "next/navigation";
import { useEffect, useReducer } from "react";

function useFormulaReducer() {
    const { slug } = useParams();
    const [state, dispatch] = useReducer(FormulaReducer, {slug});
    useEffect(() => {
      dispatch({type: slug})
    }, [])

    const type = "Symbol(react.element)"
    const validate = state?.component?.$$typeof.toString() === type

    const Component = validate ? state.component : <FormulaScreenSkeleton /> 

    return {
        Component
    }
}

export default useFormulaReducer;