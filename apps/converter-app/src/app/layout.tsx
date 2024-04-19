import Providers from "./providers";
import StyledComponentsRegistry from "@studium-nexus/lib-commons/registry";

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
