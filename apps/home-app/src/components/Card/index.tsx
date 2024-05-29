/* eslint-disable @next/next/no-img-element */

"use client";

import { useTheme } from "@studium-nexus/hooks-commons";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import CardTypes from "./Card.type";
import CardStyled from "./Card.style";
import Link from "next/link";
import { StyleSheetManager } from "styled-components";
import { useChangeLayoutContext } from "../../hooks";

function Card({ img, title, link }: CardTypes): JSX.Element {
  const { theme } = useTheme();
  const { layout } = useChangeLayoutContext();

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "layout"}>
      <Link
        href={link}
        style={{ textDecoration: "none" }}
        prefetch={true}
        role="navigation"
      >
        <CardStyled
          theme={theme === "light" ? lightTheme : darkTheme}
          role="button"
          title={`CLique aqui para ir até o ${title}`}
          layout={layout.toString()}
        >
          <img src={img} alt={`${title} icone`} role="img" />
          <p>{title}</p>
        </CardStyled>
      </Link>
    </StyleSheetManager>
  );
}

export default Card;
