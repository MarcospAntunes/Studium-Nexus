import { Dispatch, MutableRefObject, SetStateAction } from "react";

type ChartContextProps = {
  data: {
    labels: string[];
    datasets: any[];
  };
  setData: Dispatch<SetStateAction<{ labels: string[]; datasets: any[] }>>;
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  labels: string, 
  setLabels: Dispatch<SetStateAction<string>>, 
  dataType: string, 
  setDataType: Dispatch<SetStateAction<string>>, 
  selectedChart: string, 
  setSelectedChart: Dispatch<SetStateAction<string>>, 
  generateChart: () => void, 
  clear: () => void, 
  chart:  MutableRefObject<null | HTMLCanvasElement> | null
};

export default ChartContextProps;
