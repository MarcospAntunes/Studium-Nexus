import React from "react";
import { PomodoroScreen, TodoList } from "../../screens/";

type Pages = {
  [key: string]: {
    title: string;
    Page: () => React.JSX.Element;
  };
};

const productivityPages: Pages = {
  pomodoro: {
    title: "Pomodoro",
    Page: PomodoroScreen,
  },
  "to-do-list": {
    title: "To do List",
    Page: TodoList,
  },
};

export default productivityPages;
