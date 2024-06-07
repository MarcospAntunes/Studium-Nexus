"use client";

import styled from "styled-components";

const MainTodo = styled.main`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-top: 10px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.bgSearch};

    & fieldset {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      gap: 20px;
      padding: 10px;
      border: none;
      min-height: 40px;
      border-radius: 5px;
    }

    & input {
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 16px;
      color: ${({ theme }) => theme.text};
    }
  }

  #mainContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90vw;
    max-width: 500px;
    min-height: 40px;

    & button {
      width: 105px;
    }
  }

  #controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 5px;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 5px 5px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.shadown};
  }

  #listContainer {
    background-color: ${({ theme }) => theme.bgConverter};
    border-radius: 10px;
    width: 100%;

    & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
      gap: 0;
      padding: 15px;
      border: none;
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0px 0px;
      padding: 5px;
      list-style: none;

      & li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 5px;
        text-align: left;
        line-break: anywhere;
        border-bottom: 1px solid ${({ theme }) => theme.shadown};
      }
      & .checked {
        text-decoration: line-through;
      }
    }
  }

  #listControlsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 5px 5px;
    padding: 15px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.bgConverter};
  }

  @media screen and (min-width: 541px) {
    #mainContainer button {
      width: 150px;
    }
  }
`;

export default MainTodo;
