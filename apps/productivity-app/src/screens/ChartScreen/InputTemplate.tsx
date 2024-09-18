"use client";

import { useChart } from "../../hooks";

export type typeChart = {
  chart:
    | "bar"
    | "line"
    | "pie"
    | "doughnut"
    | "radar"
    | "bubble"
    | "polarArea"
    | "scatter"
    | string;
};

function InputTemplates({ chart }: typeChart): JSX.Element {
  const { value, setValue } = useChart();

  const commonInput = (
    <>
      <label htmlFor="dataset">Conjunto de Dados (separado por vírgula):</label>
      <input
        type="text"
        id="dataset"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="ex.: 10, 20, 30, 40"
      />
    </>
  );

  switch (chart) {
    case "bar":
    case "line":
    case "pie":
    case "doughnut":
    case "radar":
    case "polarArea":
      return commonInput;

    case "bubble":
      return (
        <>
          <label htmlFor="bubbleData">
            Dado da Bolha (Formato: x, y, raio | x, y, raio separado por
            vírgula):
          </label>
          <input
            type="text"
            id="bubbleData"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ex.: 10, 20, 15 | 30, 40, 20"
          />
        </>
      );

    case "scatter":
      return (
        <>
          <label htmlFor="scatterData">
            Dado da dispersão (Formato: x, y | x, y separado por vírgula):
          </label>
          <input
            type="text"
            id="scatterData"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ex.: 10, 20 | 30, 40"
          />
        </>
      );

    default:
      return <></>;
  }
}

export default InputTemplates;
