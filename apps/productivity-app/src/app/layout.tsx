import StyledComponentsRegistry from "@studium-nexus/lib-commons/registry";
import Providers from "./providers";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StyledComponentsRegistry>
        <Providers>{children}</Providers>
      </StyledComponentsRegistry>
    </>
  );
}
