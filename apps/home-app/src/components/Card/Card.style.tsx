"use client";

import styled from "styled-components";
import CadStyledProps from "./CadStyled.type";

const CardStyled = styled.li<CadStyledProps>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === "true" ? "column" : "row")};
  justify-content: ${({ layout }) => (layout === "true" ? "center" : "left")};
  align-items: center;
  gap: 12px;

  width: ${({ layout }) => (layout === "true" ? "100px" : "95vw")};
  max-width: 800px;
  height: ${({ layout }) => (layout === "true" ? "110px" : "50px")};

  padding-left: ${({ layout }) => (layout === "true" ? "0" : "10px")};
  border-radius: ${({ layout }) => (layout === "true" ? "15px" : "10px")};

  background-color: ${({ theme }: any) => theme.bgCard};
  box-shadow: -2px 2px 4px 1px ${({ theme }: any) => theme.shadown};

  color: ${({ theme }: any) => theme.text};
  font-size: 14px;

  transition: 0.3s;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    filter: invert(${({ theme }: any) => theme.invert});
  }

  p {
    width: ${({ layout }) => (layout === "true" ? "100%" : "250px")};
    text-align: ${({ layout }) => (layout === "true" ? "center" : "left")};
    word-wrap: break-word;
  }

  &:hover {
    background-color: ${({ theme }: any) => theme.bgCardHover};
    color: ${({ theme }: any) => theme.textHover};
    transition: 0.3s;

    & img {
      filter: invert(${({ theme }: any) => theme.invertHover});
    }
  }

  @media screen and (min-width: 541px) {
    width: ${({ layout }) => (layout === "true" ? "205px" : "90vw")};
    height: ${({ layout }) => (layout === "true" ? "215px" : "50px")};
    font-size: 18px;

    img {
      width: ${({ layout }) => (layout === "true" ? "64px" : "32px")};
      height: ${({ layout }) => (layout === "true" ? "64px" : "32px")};
    }
  }
`;

export default CardStyled;
