import GlobalStyles from "@/GlobalStyles";
import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import Providers from "./providers";

const Montz = Montserrat_Alternates({ weight: '300', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <GlobalStyles />
      <body className={Montz.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
