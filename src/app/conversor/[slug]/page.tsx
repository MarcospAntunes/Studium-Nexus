/* eslint-disable @next/next/no-img-element */

import { BackToTop, Header } from '@/components';
import ExistingRoutes from '@/components/ExistingRoutes';
import { converterRoutes } from '@/constants';
import { AppContainer, FlexContainerCenter } from "@/containers";
import DocMidiaConvertScreen from "@/screens/DocMidiaConversao.screen";
import GeneralConvertScreen from "@/screens/GeneralConvert.screen";

function Converter({ params }: { params: { slug: string } }) {
  const slug: string = params.slug;

  return (
    <ExistingRoutes slug={slug} routes={converterRoutes}>
      <AppContainer>
        <Header menu={true} />
        <FlexContainerCenter>
          <h2>Converter {slug}</h2>

          {slug === "documento" || slug === "midia" ?
            <DocMidiaConvertScreen params={params} />
            :
            <GeneralConvertScreen params={params} />
          }
        </FlexContainerCenter>
        <BackToTop />
      </AppContainer>
    </ExistingRoutes>
  );
}

export default Converter;
