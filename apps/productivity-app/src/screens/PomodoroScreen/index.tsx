"use client";

import { Button } from "@studium-nexus/components-commons";
import { MainPomodoro, ButtonContainer } from "./PomodoroScreen.style";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import { useTimer, useTheme } from "../../hooks";

function PomodoroScreen(): JSX.Element {
  const { theme } = useTheme();

  const { isActive, setIsActive, timer, changeTime, resetTime } = useTimer();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <MainPomodoro theme={theme === "light" ? lightTheme : darkTheme}>
      <section>
        <h1>Bem-vindo(a) ao Pomodoro!</h1>
        <br />
        <h3>Deixe esta aba aberta em seu navegador enquanto estuda.</h3>
      </section>

      <section id="pomodoroSelectTimer">
        <h3>Selecione o Temporizador desejado.</h3>
        <ButtonContainer>
          <Button onClick={() => changeTime(25 * 60, "pomodoro")}>
            Pomodoro
          </Button>
          <Button onClick={() => changeTime(5 * 60, "shortBreak")}>
            Pausa curta
          </Button>
          <Button onClick={() => changeTime(30 * 60, "longBreak")}>
            Pausa longa
          </Button>
        </ButtonContainer>
      </section>

      <section id="pomodoroTimerContainer">
        <span role="timer" id="pomodoroTimer">
          {formatTime(timer)}
        </span>
        <p>Hora de focar nos estudos!</p>
        <ButtonContainer>
          <Button onClick={() => setIsActive(true)} role="button">
            Iniciar
          </Button>
          <Button
            onClick={() => resetTime()}
            role="button"
            disabled={!isActive}
          >
            Reiniciar
          </Button>
          <Button
            onClick={() => setIsActive(false)}
            role="button"
            disabled={!isActive}
          >
            Parar
          </Button>
        </ButtonContainer>
      </section>
    </MainPomodoro>
  );
}

export default PomodoroScreen;
