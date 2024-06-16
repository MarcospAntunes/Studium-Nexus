/* eslint-disable @next/next/no-img-element */

import { ExistingRoutes, Header, BackToTop } from "../components";
import { converterRoutes } from "@studium-nexus/constants-commons";
import { AppContainer, FlexContainerCenter } from "../containers";
import { DocMidiaConvertScreen, GeneralConvertScreen } from "../screens";
import { Footer } from "@studium-nexus/components-commons";

function Converter({ params }: { params: { slug: string } }) {
  const slug: string = params.slug;

  return (
    <ExistingRoutes slug={slug} routes={converterRoutes}>
      <AppContainer>
        <Header menu={true} />
        <FlexContainerCenter>
          <h2>Converter {slug}</h2>

          {slug === "documento" || slug === "midia" ? (
            <DocMidiaConvertScreen params={params} />
          ) : (
            <GeneralConvertScreen params={params} />
          )}
        </FlexContainerCenter>
        <Footer />
        <BackToTop />
      </AppContainer>
    </ExistingRoutes>
  );
}

export default Converter;
