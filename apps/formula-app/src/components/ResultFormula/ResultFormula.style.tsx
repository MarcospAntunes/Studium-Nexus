"use client";

import styled from "styled-components";

const ResultFormulaStyled = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  text-align: center;
  word-break: normal;
  border-radius: 15px;
  color: ${({ theme }: any) => theme.text};
  transition: 0.3s;

  @media screen and (min-width: 541px) {
    max-width: 350px;
    font-size: 16px;
  }
`;

export default ResultFormulaStyled;
