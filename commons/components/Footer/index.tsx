"use client";

import Link from "next/link";
import FooterStyled from "./Footer.style";
import { useEffect, useState } from "react";

function Footer(): JSX.Element {
  const [dinamicText, setDinamicText] = useState<string[]>([
    "Sobre",
    "FeedBack",
    "Política de Privacidade",
  ]);
  const [dinamicHref, setDinamicHref] = useState<string[]>([
    "/sobre",
    "/feedback",
    "/politica-de-privacidade",
  ]);

  useEffect(() => {
    if (window.location.href.includes("sobre")) {
      setDinamicText(["Home", "Feedback", "Política de Privacidade"]);
      setDinamicHref(["/", "/feedback", "/politica-de-privacidade"]);
    } else if (!window.location.href.includes("feedback")) {
      setDinamicText(["Sobre", "Feedback", "Política de Privacidade"]);
      setDinamicHref(["/sobre", "/feedback", "/politica-de-privacidade"]);
    }

    if (window.location.href.includes("feedback")) {
      setDinamicText(["Sobre", "Home"]);
      setDinamicHref(["/sobre", "/"]);
    } else if (!window.location.href.includes("sobre")) {
      setDinamicText(["Sobre", "Feedback", "Política de Privacidade"]);
      setDinamicHref(["/sobre", "/feedback", "/politica-de-privacidade"]);
    }
    if (window.location.href.includes("politica-de-privacidade")) {
      setDinamicText(["Sobre", "Feedback", "Home"]);
      setDinamicHref(["/sobre", "/feedback", "/"]);
    } else if (!window.location.href.includes("sobre")) {
      setDinamicText(["Sobre", "Feedback", "Política de Privacidade"]);
      setDinamicHref(["/sobre", "/feedback", "/politica-de-privacidade"]);
    }
  }, []);

  return (
    <FooterStyled>
      <ul>
        <li>
          <Link href={dinamicHref[0]}>{dinamicText[0]}</Link>
        </li>
        <li>
          Contato: {"  "}
          <a href="mailto:marcospantunes203@gmail.com">
            marcospantunes203@gmail.com
          </a>
        </li>
        <li>
          <Link href={dinamicHref[1]}>{dinamicText[1]}</Link>
        </li>
        <li>
          <Link href={dinamicHref[2]}>{dinamicText[2]}</Link>
        </li>
      </ul>
    </FooterStyled>
  );
}

export default Footer;
