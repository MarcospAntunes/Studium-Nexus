import StyledComponentsRegistry from "@/lib/registry";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  );
}
