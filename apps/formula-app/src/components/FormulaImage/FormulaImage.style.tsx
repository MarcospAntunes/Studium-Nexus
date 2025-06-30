"use client";

import styled from "styled-components";

const ImgStyled = styled.img`
  filter: invert(${({ theme }: any) => theme.invert});
`;

export default ImgStyled;
