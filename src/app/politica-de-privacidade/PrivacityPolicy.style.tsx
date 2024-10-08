"use client";

import styled from "styled-components";

const MainPrivacy = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  & div {
    max-width: 600px;
    text-align: justify;

    h1 {
      text-align: center;
    }

    h2 {
      text-align: left;
    }

    h1,
    h2 {
      margin-left: 10px;
    }

    li {
      margin-left: 40px;
    }

    h2 + p,
    h1 + p,
    ul + h2 {
      margin: 15px;
    }
  }
`;

export default MainPrivacy;
