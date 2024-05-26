"use client";

import styled from "styled-components";
import UlStyledProps from "./UlStyled.type";

const UlStyled = styled.ul<UlStyledProps>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === "true" ? "row" : "column")};
  align-items: ${({ layout }) => (layout === "true" ? "center" : "flex-start")};
  justify-content: ${({ layout }) => (layout === "true" ? "center" : "left")};
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px 0px 15px 0px;

  list-style: none;
`;

export default UlStyled;
