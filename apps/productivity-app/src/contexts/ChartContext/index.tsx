import { Children } from "@studium-nexus/types-commons";
import { createContext, useState, MutableRefObject, useEffect, useRef, } from "react";
import { Chart, ChartType } from "chart.js/auto";
import ChartContextProps from "./ChartContext.type";

const ChartContext = createContext<ChartContextProps>({
  data: {
    labels: [],
    datasets: [],
  },
  setData: () => {},
  value: "", 
  setValue: () => "",
  labels: "", 
  setLabels: () => "", 
  dataType: "", 
  setDataType: () => "", 
  selectedChart: "", 
  setSelectedChart: () => "",
  generateChart: () => null, 
  clear: () => null, 
  chart: null
});

ChartContext.displayName = "Todo List";

function ChartProvider({ children }: Children) {
  const [data, setData] = useState({
    labels: [""],
    datasets: [{}],
  });

  const [value, setValue] = useState("");
  const [selectedChart, setSelectedChart] = useState<string>("bar");
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  const [labels, setLabels] = useState("");
  const [dataType, setDataType] = useState("");
  const chartInstanceRef = useRef<Chart | null | any>(null);
  const chart: MutableRefObject<null | HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    setCtx(chart.current?.getContext("2d"));
  }, [selectedChart]);

  useEffect(() => {
    setData({
      datasets: data.datasets,
      labels: [...labels.trim().split(",")],
    });
  }, [labels]);

  const generateChart = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (ctx && data.datasets.length > 0) {
      if (selectedChart !== "bubble" && selectedChart !== "scatter") {
        chartInstanceRef.current = new Chart(ctx, {
          type: selectedChart as ChartType,
          data: {
            datasets: [
              {
                type: selectedChart as ChartType,
                data: data.datasets,
                label: dataType,
              },
            ],
            labels: data.labels,
          },
        });
      } else {
        const datasets = dataType.split(",").map((type, index) => {
          return {
            type: selectedChart as ChartType,
            data: [data.datasets[index]],
            label: type.trim(),
          };
        });

        chartInstanceRef.current = new Chart(ctx, {
          type: selectedChart as ChartType,
          data: {
            datasets,
            labels: data.labels,
          },
        });
      }
    }
  };

  const clear = () => {
    if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    setCtx(null)
    setData({
      datasets: [""],
      labels: [""]
    })
    setLabels("");
    setDataType("");
    setValue("")
  }

  useEffect(() => {
    if (value.includes("|")) {
      const coords: Array<{ x: string; y: string; r: string }> = value
        .split("|")
        .map((coord) => {
          const [x, y, r] = coord.split(",");
          return { x, y, r };
        });
      setData({
        datasets: coords,
        labels: data.labels,
      });
    } else {
      setData({
        datasets: value.split(","),
        labels: data.labels,
      });
    }
  }, [data.labels, setData, value]);


  return (
    <ChartContext.Provider value={{ data, setData, value, setValue, labels, setLabels, dataType, setDataType, selectedChart, setSelectedChart, generateChart, clear, chart }}>
      {children}
    </ChartContext.Provider>
  );
}

export { ChartProvider, ChartContext };
