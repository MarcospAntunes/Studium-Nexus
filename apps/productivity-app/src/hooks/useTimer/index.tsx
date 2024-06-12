"use client";

import { useEffect, useState } from "react";
import { currentTimerProps } from "./useTimer.type";

function useTimer() {
  const [timer, setTimer] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [currentTimer, setCurrentTimer] = useState<currentTimerProps>({
    currentTimer: "pomodoro",
  });

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let interval: NodeJS.Timeout | string = "";

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            resetTime();
            return timer;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const resetTime = () => {
    const timers = {
      pomodoro: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 30 * 60,
    };

    setIsActive(false);
    setTimer(timers[currentTimer.currentTimer]);

    return;
  };

  const changeTime = (
    time: number,
    type: "pomodoro" | "shortBreak" | "longBreak",
  ) => {
    setIsActive(false);
    setCurrentTimer({ currentTimer: type });
    setTimer(time);

    return;
  };

  return {
    timer,
    setTimer,
    isActive,
    setIsActive,
    currentTimer,
    setCurrentTimer,
    resetTime,
    changeTime,
  };
}

export default useTimer;
