import GlobalStyles from "@/GlobalStyles";
import Providers from "./providers";
import StyledComponentsRegistry from "@/lib/registry";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <StyledComponentsRegistry>
      <GlobalStyles />
      <Providers>
        {children}
      </Providers>
    </StyledComponentsRegistry>
    </>
  );
}
