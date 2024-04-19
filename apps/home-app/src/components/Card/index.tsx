/* eslint-disable @next/next/no-img-element */

import { useTheme } from "@studium-nexus/hooks-commons";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import CardTypes from "./Card.type";
import CardStyled from "./Card.style";
import Link from "next/link";

function Card({ img, title, link }: CardTypes): JSX.Element {
  const { theme } = useTheme();
  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      prefetch={true}
      role="navigation"
    >
      <CardStyled
        theme={theme === "light" ? lightTheme : darkTheme}
        role="button"
      >
        <img src={img} alt={`${title} icone`} role="img" />
        <p>{title}</p>
      </CardStyled>
    </Link>
  );
}

export default Card;
