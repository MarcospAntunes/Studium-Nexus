"use client";

import styled from "styled-components";

const FlexContainerSpaceBTW = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FlexContainerCenter = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlexContainerAdapter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 541px) {
    flex-direction: row;
  }
`;

export { FlexContainerSpaceBTW, FlexContainerCenter, FlexContainerAdapter };
