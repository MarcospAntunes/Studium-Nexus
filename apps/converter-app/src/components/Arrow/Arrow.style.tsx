"use client";

import styled from "styled-components";
import typeThemes from "@studium-nexus/utils-commons/themes/themes.type"

const ArrowStyled = styled.img`
  position: absolute;
  top: 95%;
  width: 24px;
  height: 50px;
  transform: rotate(180deg);
  z-index: 1;
  filter: invert(${({ theme }: any) => theme.invert});

  @media screen and (min-width: 541px) {
    width: 30px;
    top: 25%;
    left: 100%;
    transform: rotate(90deg);
  }
`;

export default ArrowStyled;
