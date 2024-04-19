"use client";

import styled from "styled-components";

const BackToTopButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  padding: 10px;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  transition: 0.3s;
  cursor: pointer;
`;

const BackToTopContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

export { BackToTopContainer, BackToTopButton };
