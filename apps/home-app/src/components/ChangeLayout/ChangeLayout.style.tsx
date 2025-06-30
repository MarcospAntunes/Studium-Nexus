import styled from "styled-components";
import ChangeLayoutStyledProps from "./ChangeLayoutStyled.type";

const ChangeLayoutStyled = styled.button<ChangeLayoutStyledProps>`
  display: flex;
  justify-content: ${({ layout }) => (layout === "true" ? "center" : "left")};
  align-items: ${({ layout }) => (layout === "true" ? "center" : "flex-start")};
  flex-wrap: wrap;
  gap: 5px;
  width: ${({ layout }) => (layout === "true" ? "45px" : "60px")};
  height: 45px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }: any) => theme.bgCard};
  }

  div {
    width: 10px;
    height: ${({ layout }) => (layout === "true" ? "10px" : "4px")};
    border-radius: 2px;
    border: 1px solid ${({ theme }: any) => theme.text};
  }

  .first {
    width: ${({ layout }) => (layout === "true" ? "10px" : "60px")};
  }

  .second {
    width: ${({ layout }) => (layout === "true" ? "10px" : "20px")};
  }

  .third {
    width: ${({ layout }) => (layout === "true" ? "10px" : "30px")};
  }

  .last {
    display: ${({ layout }) => (layout === "true" ? "block" : "none")};
  }

  @media screen and (min-width: 541px) {
    width: ${({ layout }) => (layout === "true" ? "60px" : "75px")};
    height: 60px;

    & div {
      width: ${({ layout }) =>
        layout === "true" ? "15px !important" : "15px"};
      height: ${({ layout }) => (layout === "true" ? "15px" : "4px")};
    }

    & .first {
      width: ${({ layout }) => (layout === "true" ? "10px" : "50px")};
    }

    & .second {
      width: ${({ layout }) => (layout === "true" ? "50px" : "30px")};
    }

    & .third {
      width: ${({ layout }) => (layout === "true" ? "10px" : "75px")};
    }
  }
`;

export default ChangeLayoutStyled;
