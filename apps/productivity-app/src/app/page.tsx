import { ExistingRoutes, Header } from "@studium-nexus/components-commons";
import { productivityRoutes } from "@studium-nexus/constants-commons";
import { AppContainer } from "@studium-nexus/containers-commons";
import { productivityPages } from "../utils";

function Productivity({ params }: { params: { slug: string } }): JSX.Element {
  const { slug } = params;
  const { Page } = productivityPages[slug];
  return (
    <ExistingRoutes slug={slug} routes={productivityRoutes}>
      <AppContainer>
        <Header menu={true} />
        <Page />
      </AppContainer>
    </ExistingRoutes>
  );
}

export default Productivity;
