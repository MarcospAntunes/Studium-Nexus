"use client";

import styled from "styled-components";
import { TitleProps } from "./TitleNicoMoju.type";

const Title = styled.h1<TitleProps>`
  font-weight: bold;
  font-display: swap;
  text-align: center;

  cursor: ${({ nav }) => (nav === "true" ? "pointer" : "auto")};
`;

export default Title;
