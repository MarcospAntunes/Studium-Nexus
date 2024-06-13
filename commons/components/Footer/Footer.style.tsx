"use client";

import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 200px;
  border-top: 1px solid #8f8f8f;
  border-bottom: 1px solid #8f8f8f;
  padding: 10px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;

    & li {
      text-align: left;
      font-size: 14px;
    }
  }

  a {
    text-align: left;
    color: inherit;
    cursor: pointer;
  }

  @media screen and (min-width: 541px) {
    height: auto;

    ul {
      flex-direction: row;

      & li {
        font-size: 18px;
      }
    }
  }
`;

export default FooterStyled;
