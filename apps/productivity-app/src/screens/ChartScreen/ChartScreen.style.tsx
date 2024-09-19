"use client";

import styled from "styled-components";

const MainChartScreen = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  & form div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  & form fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
  }
  & form fieldset input,
  & form select {
    min-width: 200px;
    max-width: 500px;
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 15px;
  }

  & form select option {
    background-color: ${({ theme }) => theme.body};
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: nowrap;
  }

  .buttons button {
    max-width: 350px;
  }

  @media screen and (min-width: 541px) {
    p,
    input,
    span,
    p,
    label,
    select {
      font-size: 16px;
    }
  }
`;

export default MainChartScreen;
