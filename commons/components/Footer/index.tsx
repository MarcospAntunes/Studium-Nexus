"use client";

import Link from "next/link";
import FooterStyled from "./Footer.style";
import { useEffect, useState } from "react";

function Footer(): JSX.Element {
  const [dinamicText, setDinamicText] = useState<string[]>([
    "Sobre",
    "FeedBack",
  ]);
  const [dinamicHref, setDinamicHref] = useState<string[]>([
    "/sobre",
    "/feedback",
  ]);

  useEffect(() => {
    if (window.location.href.includes("sobre")) {
      setDinamicText(["Home", "Feedback"]);
      setDinamicHref(["/", "/feedback"]);
    } else if (!window.location.href.includes("feedback")) {
      setDinamicText(["Sobre", "Feedback"]);
      setDinamicHref(["/sobre", "/feedback"]);
    }

    if (window.location.href.includes("feedback")) {
      setDinamicText(["Sobre", "Home"]);
      setDinamicHref(["/sobre", "/"]);
    } else if (!window.location.href.includes("sobre")) {
      setDinamicText(["Sobre", "Feedback"]);
      setDinamicHref(["/sobre", "/feedback"]);
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
      </ul>
    </FooterStyled>
  );
}

export default Footer;
