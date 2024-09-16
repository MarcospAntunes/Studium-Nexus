import { Children } from "@studium-nexus/types-commons";
import { createContext, useState, Dispatch, SetStateAction } from "react";

type ChartContextProps = {
  data: {
    labels: string[];
    datasets: any[];
  };
  setData: Dispatch<SetStateAction<{ labels: string[]; datasets: any[] }>>;
  value: string,
  setValue: Dispatch<SetStateAction<string>>
};

const ChartContext = createContext<ChartContextProps>({
  data: {
    labels: [],
    datasets: [],
  },
  setData: () => {},
  value: "", 
  setValue: () => "",
});

ChartContext.displayName = "Todo List";

function ChartProvider({ children }: Children) {
  const [data, setData] = useState({
    labels: [""],
    datasets: [""],
  });

  const [value, setValue] = useState("");

  return (
    <ChartContext.Provider value={{ data, setData, value, setValue }}>
      {children}
    </ChartContext.Provider>
  );
}

export { ChartProvider, ChartContext };
