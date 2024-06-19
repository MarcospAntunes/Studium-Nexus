"use client";

import styled from "styled-components";

const FeedbackStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  h1 {
    font-size: clamp(18px, 2vw, 24px);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 15px;
    border-radius: 15px;
    width: 100%;
    max-width: 800px;
    background-color: ${({ theme }) => theme.bgCard};
  }

  fieldset {
    border: none;
    text-align: left;
    width: 100%;
    font-size: clamp(14px, 2vw, 18px);

    & legend {
      margin-bottom: 10px;
      font-size: clamp(16px, 2vw, 20px);
    }

    & textarea {
      width: 100%;
      height: 100px;
      padding: 5px;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.text};
      border-radius: 10px;
      color: ${({ theme }) => theme.text};
    }
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: left;

    & > label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      width: 100%;

      & input {
        display: none;
      }
    }
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  & #buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
`;

export default FeedbackStyled;
