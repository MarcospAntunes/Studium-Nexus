import GlobalStyles from "@/GlobalStyles";
import Providers from "./providers";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStyles />
      <Providers>
        {children}
      </Providers>
    </>
  );
}
