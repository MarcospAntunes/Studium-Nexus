import {
  CalendarScreen,
  ChartScreen,
  PomodoroScreen,
  TodoList,
} from "../../screens/";
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
  calendario: {
    title: "Calendário",
    Page: CalendarScreen,
  },
};

export default productivityPages;
