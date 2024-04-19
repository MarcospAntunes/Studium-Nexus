"use client";

import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    padding: 10px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.body};
    font-size: 14px;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: translate(-1px, -1px);
      transition: 0.3s;
    }

    &::after {
      content: "▸";
      margin-left: 5px;
      filter: ${({ theme }) => theme.invert};
    }
  }

  @media screen and (min-width: 541px) {
    & a {
      width: 200px;
      font-size: 16px;
    }
  }
`;

export default NavigationStyled;
