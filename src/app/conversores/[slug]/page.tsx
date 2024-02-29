/* eslint-disable @next/next/no-img-element */
"use client"

import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import { Header } from '@/components';
import { AppContainer, FlexContainerCenter } from "@/containers";
import GlobalStyles from "@/GlobalStyles";
import DocMidiaConvertScreen from "@/screens/DocMidiaConversao.screen";
import GeneralConvertScreen from "@/screens/GeneralConvert.screen";

function Conversor({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
      <AppContainer>
        <Header convertion={true}/>
        <FlexContainerCenter>
          <h2>Converter {slug}</h2>

          {slug === "documento" || slug === "midia" ? 
            <DocMidiaConvertScreen params={params} />
          :
            <GeneralConvertScreen params={params} />  
          }
        </FlexContainerCenter>
      </AppContainer>
    </>
  );
}
  
export default Conversor;
