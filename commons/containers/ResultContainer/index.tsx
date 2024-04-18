"use client"

import styled from "styled-components";

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  text-align: center;
  border-radius: 15px;
  transition: .3s;

  @media screen and (min-width: 541px) {
    max-width: 350px;
    font-size: 16px;
  }
`

export default ResultContainer;
