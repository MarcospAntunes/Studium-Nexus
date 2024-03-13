"use client"

import GlobalStyles from "@/GlobalStyles";
import { 
  SearchBox, 
  Header, 
  ListConverter, 
  BackToTop,
  Slogan
} from "@/components";

import { AppContainer, FlexContainerSpaceBTW } from '@/containers';
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
      <AppContainer>
        <Header />
        <main>
          <section>
            <Slogan/>
            <FlexContainerSpaceBTW>
              <h3>Funcionalidades</h3>
              <SearchBox />
            </FlexContainerSpaceBTW>
            <ListConverter />
          </section>
        </main>
        <BackToTop />
      </AppContainer>
    </>
  );
}
