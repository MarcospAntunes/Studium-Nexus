"use client";

import styled from "styled-components";

const PageFormulaContainerStyled = styled.main`
  width: 100%;
  max-width: 950px;
  padding: 10px;
  border-radius: 15px;
  font-size: 16px;
  background-color: ${({ theme }: any) => theme.bgCard};

  h1 {
    font-size: 24px;
  }

  & .botoes {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
`;

export default PageFormulaContainerStyled;
