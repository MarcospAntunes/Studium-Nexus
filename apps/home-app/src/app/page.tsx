import { Header, BackToTop } from "@studium-nexus/components-commons";

import { SearchBox, List, Slogan, ChangeLayout } from "../components/";

import {
  AppContainer,
  FlexContainerSpaceBTW,
} from "@studium-nexus/containers-commons";
import { MainContainer } from "../containers";

export default async function Home() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <section>
          <Slogan />
          <FlexContainerSpaceBTW>
            <ChangeLayout />
            <SearchBox />
          </FlexContainerSpaceBTW>
          <List />
        </section>
      </MainContainer>
      <BackToTop />
    </AppContainer>
  );
}
