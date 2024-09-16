import { ChartContext } from "../../contexts";
import { useContext } from "react";

function useChart() {
  const { data, setData, value, setValue } = useContext(ChartContext);

  return { data, setData, value, setValue };
}

export default useChart;
