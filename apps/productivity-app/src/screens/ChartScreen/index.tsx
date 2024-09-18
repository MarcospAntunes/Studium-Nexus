"use client";

import InputTemplates from "./InputTemplate";
import { Button } from "@studium-nexus/components-commons";
import MainChartScreen from "./ChartScreen.style";
import { useTheme } from "@studium-nexus/hooks-commons";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import { useChart } from "../../hooks";

function ChartScreen(): JSX.Element {
  const { theme } = useTheme();
  const {
    chart,
    clear,
    dataType,
    generateChart,
    labels,
    selectedChart,
    setDataType,
    setLabels,
    setSelectedChart,
  } = useChart();

  return (
    <MainChartScreen theme={theme === "light" ? lightTheme : darkTheme}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <fieldset>
            <label htmlFor="labels">Rótulos (separe por vírgula):</label>
            <input
              type="text"
              id="labels"
              value={labels}
              onChange={(e) => setLabels(e.target.value)}
              placeholder="ex.: Janeiro, Fevereiro, Março, Abril"
            />
            <label htmlFor="dataType">Tipo de dado</label>
            <input
              type="text"
              id="dataType"
              value={dataType}
              onChange={(e) => setDataType(e.target.value)}
              placeholder="ex.: Mês"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="selectChart">Tipo de Gráfico</label>
            <select
              name="selectChart"
              onChange={(e) => setSelectedChart(e.target.value)}
            >
              <option value="bar">Gráfico de Barra</option>
              <option value="line">Gráfico de Linha</option>
              <option value="pie">Gráfico de Pizza</option>
              <option value="doughnut">Gráfico de rosca</option>
              <option value="radar">Gráfico de Radar</option>
              <option value="polarArea">Gráfico de Área Polar</option>
              <option value="bubble">Gráfico de Bolha</option>
              <option value="scatter">Gráfico de Dispersão</option>
            </select>
            <InputTemplates chart={selectedChart} />
          </fieldset>
        </div>
        <div className="buttons">
          <Button onClick={() => generateChart()}>Gerar gráfico</Button>
          <Button onClick={() => clear()}>Limpar</Button>
        </div>
      </form>
      <canvas ref={chart}></canvas>
    </MainChartScreen>
  );
}

export default ChartScreen;
