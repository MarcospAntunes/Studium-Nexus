/* eslint-disable react-hooks/exhaustive-deps */
import { conversoresReducer } from "@/reducers/conversoresReducer";
import { useEffect, useReducer } from "react";

function useConversorReducer(slug: string) {
    const [state, dispatch] = useReducer(conversoresReducer, {slug});
    useEffect(() => {
      dispatch({type: slug})
    }, [])
  
    const nomesDasUnidades = Object.keys(state);
    const abreviacaoDasUnidades = Object.values(state);

    return {
        nomesDasUnidades,
        abreviacaoDasUnidades,
        state
    }
}

export default useConversorReducer;