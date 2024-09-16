import { ChartScreen, PomodoroScreen, TodoList } from "../../screens/";
import { Pages } from "./productivityPages.type";

const productivityPages: Pages = {
  pomodoro: {
    title: "Pomodoro",
    Page: PomodoroScreen,
  },
  "to-do-list": {
    title: "To do List",
    Page: TodoList,
  },
  graficos: {
    title: "Gráficos",
    Page: ChartScreen,
  },
};

export default productivityPages;
