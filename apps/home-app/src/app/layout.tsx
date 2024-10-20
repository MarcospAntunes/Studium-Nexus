import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import Providers from "./providers";
import StyledComponentsRegistry from "@studium-nexus/lib-commons/registry";
import { NextFont } from "next/dist/compiled/@next/font";
import Script from "next/script";

const Montz: NextFont = Montserrat_Alternates({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studium Nexus",
  description:
    "Studium Nexus, a plataforma de estudos para auxiliar você que está em faze de aprendizagem ou esteja com curiosidade sobre algo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4555608257448575"
          crossOrigin="anonymous"
        />
      </head>
      <body className={Montz.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
