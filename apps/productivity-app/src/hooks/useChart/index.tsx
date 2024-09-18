import { ChartContext } from "../../contexts";
import { useContext } from "react";

function useChart() {
  const {
    data,
    setData,
    value,
    setValue,
    chart,
    clear,
    dataType,
    generateChart,
    labels,
    selectedChart,
    setDataType,
    setLabels,
    setSelectedChart,
  } = useContext(ChartContext);

  return {
    data,
    setData,
    value,
    setValue,
    chart,
    clear,
    dataType,
    generateChart,
    labels,
    selectedChart,
    setDataType,
    setLabels,
    setSelectedChart,
  };
}

export default useChart;
