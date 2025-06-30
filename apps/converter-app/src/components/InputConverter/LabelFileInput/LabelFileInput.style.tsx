"use client";

import styled from "styled-components";

const LabelFileInputStyled = styled.label`
  background-color: ${({ theme }: any) => theme.bgCard};
  border: 1px solid ${({ theme }: any) => theme.text};
  border-radius: 15px;
  width: 100%;
  max-width: 300px;
  padding: 5px;
  font-family: inherit;
  font-size: 14px;
  color: ${({ theme }: any) => theme.text};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }: any) => theme.bgCardHover};
    color: ${({ theme }: any) => theme.textHover};
    border-color: ${({ theme }: any) => theme.textHover};
  }

  & input[type="file"] {
    display: none;
  }

  @media screen and (min-width: 541px) {
    font-size: 18px;
  }
`;

export default LabelFileInputStyled;
