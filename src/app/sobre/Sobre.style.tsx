"use client";

import styled from "styled-components";

const SobreStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 700px;
  padding: 10px;

  p {
    text-align: justify;
    text-indent: 12px;
    font-size: inherit;
  }
  a {
    color: inherit;
  }
`;

export default SobreStyled;
