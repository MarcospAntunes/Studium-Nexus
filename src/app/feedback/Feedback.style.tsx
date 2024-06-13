"use client";

import styled from "styled-components";

const FeedbackStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;

  h1 {
    font-size: clamp(18px, 2vw, 24px);
  }
`;

export default FeedbackStyled;
