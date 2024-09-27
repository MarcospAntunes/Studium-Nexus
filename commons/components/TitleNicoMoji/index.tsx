import localFont from "next/font/local";
import Title from "./TitleNicoMoji.style";
import React from "react";
import { TitleNicoMojiProps } from "./TitleNicoMoju.type";

const NicoMoji = localFont({
  src: [
    {
      path: "../../fonts/NicoMoji-Regular.ttf",
      weight: "300",
    },
  ],
  variable: "--font-NicoMoji",
});

function TitleNicoMoji({
  children,
  onClick,
  nav = "false",
}: TitleNicoMojiProps): JSX.Element {
  return (
    <Title className={NicoMoji.className} onClick={onClick} nav={nav}>
      {children}
    </Title>
  );
}

export default TitleNicoMoji;
