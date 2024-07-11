import { Header, BackToTop, Footer } from "@studium-nexus/components-commons";

import { SearchBox, List, Slogan, ChangeLayout, Filter } from "../components/";

import {
  AppContainer,
  FlexContainerSpaceBTW,
} from "@studium-nexus/containers-commons";
import { ButtonContainer, MainContainer } from "../containers";

export default async function Home() {
  return (
    <AppContainer>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4555608257448575"
          crossOrigin="anonymous"
        ></script>
      </head>
      <Header />
      <MainContainer>
        <section>
          <Slogan />
          <FlexContainerSpaceBTW>
            <ButtonContainer>
              <ChangeLayout />
              <Filter />
            </ButtonContainer>
            <SearchBox />
          </FlexContainerSpaceBTW>
          <List />
        </section>
      </MainContainer>
      <Footer />
      <BackToTop />
    </AppContainer>
  );
}
