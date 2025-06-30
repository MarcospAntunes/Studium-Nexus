"use client";

import styled from "styled-components";

const FilterButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    filter: invert(${({ theme }: any) => theme.invert});
  }

  @media screen and (min-width: 541px) {
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

export default FilterButtonStyled;
