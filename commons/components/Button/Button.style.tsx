"use client";

import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 15px;
  width: 100%;
  padding: 5px;
  font-family: inherit;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.textDisabled};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bgCardHover};
    color: ${({ theme }) => theme.textHover};
    border-color: ${({ theme }) => theme.textHover};
  }

  @media screen and (min-width: 541px) {
    max-width: 300px;
    font-size: 18px;
  }
`;

export default ButtonStyled;
