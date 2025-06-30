"use client";

import styled from "styled-components";

const CustomCheckboxStyled = styled.label`
  & label {
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }: any) => theme.text};
    cursor: pointer;
  }

  .checked {
    background-image: url("/icons/check-icon.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }: any) => theme.text};
  }
`;

export default CustomCheckboxStyled;
