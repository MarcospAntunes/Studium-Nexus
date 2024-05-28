"use client";

import styled from "styled-components";

const MainPomodoro = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  #pomodoroSelectTimer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  #pomodoroTimerContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 10px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.bgConverter};
  }

  #pomodoroTimerContainer span {
    color: yellow;
    font-size: 24px;
  }
  #pomodoroTimerContainer #buttons button {
    width: 100px;
  }

  @media screen and (min-width: 541px) {
    #pomodoroTimerContainer span {
      font-size: 32px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & button {
    width: 100px;
  }

  @media screen and (min-width: 541px) {
    & button {
      width: 150px;
    }
  }
`;

export { MainPomodoro, ButtonContainer };
