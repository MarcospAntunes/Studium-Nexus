"use client";

import styled from "styled-components";
import { SelectStyledProps } from "./SelectStyled.type";

const SelectStyled = styled.select<SelectStyledProps>`
  position: absolute;
  display: ${({ isActive }) => (isActive === "true" ? "block" : "none")};
  left: 10px;
  top: 40px;
  padding: 10px;
  background-color: ${({ theme }: any) => theme.bgCard};
  color: ${({ theme }: any) => theme.text};
  border-radius: 10px;
  border: 1px solid ${({ theme }: any) => theme.text};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  z-index: 1;
  overflow: hidden;

  & option {
    border-radius: 15px;
    padding: 2px;
    text-align: center;
    font-size: 14px;
  }

  @media screen and (min-width: 541px) {
    left: 15px;
    top: 60px;
    & option {
      font-size: 18px;
    }
  }
`;

export default SelectStyled;
