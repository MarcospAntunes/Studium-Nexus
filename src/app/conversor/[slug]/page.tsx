/* eslint-disable @next/next/no-img-element */
"use client"

import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import { BackToTop, Header } from '@/components';
import { AppContainer, FlexContainerCenter } from "@/containers";
import GlobalStyles from "@/GlobalStyles";
import DocMidiaConvertScreen from "@/screens/DocMidiaConversao.screen";
import GeneralConvertScreen from "@/screens/GeneralConvert.screen";

function Converter({ params }: { params: { slug: string } }) {
  const slug: string = params.slug;
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
      <AppContainer>
        <Header menu={true}/>
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
    </>
  );
}
  
export default Converter;
