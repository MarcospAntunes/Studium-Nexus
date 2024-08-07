"use client";

import { Button } from "@studium-nexus/components-commons";
import { MainPomodoro, ButtonContainer } from "./PomodoroScreen.style";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import { useTimer, useTheme } from "../../hooks";
import { formatTime } from "../../utils";

function PomodoroScreen(): JSX.Element {
  const { theme } = useTheme();

  const { isActive, setIsActive, timer, changeTime, resetTime } = useTimer();

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
          <Button onClick={() => changeTime(25 * 60, "pomodoro")} role="button">
            Pomodoro
          </Button>
          <Button
            onClick={() => changeTime(5 * 60, "shortBreak")}
            role="button"
          >
            Pausa curta
          </Button>
          <Button
            onClick={() => changeTime(30 * 60, "longBreak")}
            role="button"
          >
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
