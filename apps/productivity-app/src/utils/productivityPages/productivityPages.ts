import React from "react";
import { PomodoroScreen } from "../../screens/";

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
};

export default productivityPages;
