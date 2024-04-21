"use client"

import styled from "styled-components";

const ErrorScreenStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  gap: 20px;
  padding: 10px;

  h2 {
    font-size: 20px;
    text-align: center;
  }

  p, a {
    max-width: 500px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: black;
  }

  @media screen and (min-width: 541px) {
    h2 {
      font-size: 24px;
    }

    p, a {
      font-size: 18px;
    }
  }
`

export default ErrorScreenStyled
