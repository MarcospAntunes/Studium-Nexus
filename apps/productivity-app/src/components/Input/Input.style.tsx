"use client";

import styled from "styled-components";

const InputStyled = styled.input`
  font-family: inherit;
  font-size: 14px;
  border: none;
  border-radius: 15px;

  width: 230px;
  padding: 8px;
  background-color: ${({ theme }) => theme.bgCalendar};
  font-size: 14px;
  color: ${({ theme }) => theme.textHover};
  transition: 0.3s;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 541px) {
    width: 100%;
    max-width: 500px;
    font-size: 16px;
  }
`;

export default InputStyled;
