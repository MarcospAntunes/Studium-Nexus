import StyledComponentsRegistry from "@studium-nexus/lib-commons/registry";
import { FeedbackProvider } from "../contexts";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <FeedbackProvider>{children}</FeedbackProvider>
    </StyledComponentsRegistry>
  );
}
