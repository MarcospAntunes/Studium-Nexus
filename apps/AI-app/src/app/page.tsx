/* eslint-disable @next/next/no-img-element */

import { ExistingRoutes, Header, BackToTop, Footer } from "@studium-nexus/components-commons";
import { AIRoutes } from "@studium-nexus/constants-commons";
import { AppContainer } from "@studium-nexus/containers-commons";
import AiPages from "../utils/AIPages";

function ArtificialIntelligence({ params }: { params: { slug: string } }) {
  const slug: string = params.slug;

  const { title, Page } = AiPages[slug] || { title: null, Page: null };

  return (
    <ExistingRoutes slug={slug} routes={AIRoutes}>
      <AppContainer>
        <Header menu={true} />
        <Page />
        <Footer />
        <BackToTop />
      </AppContainer>
    </ExistingRoutes>
  );
}

export default ArtificialIntelligence;
