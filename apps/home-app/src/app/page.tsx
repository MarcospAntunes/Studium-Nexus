import { Header, BackToTop } from "@studium-nexus/components-commons";

import { SearchBox, List, Slogan, ChangeLayout, Filter } from "../components/";

import {
  AppContainer,
  FlexContainerSpaceBTW,
} from "@studium-nexus/containers-commons";
import { ButtonContainer, MainContainer } from "../containers";

export default async function Home() {
  return (
    <AppContainer>
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
      <BackToTop />
    </AppContainer>
  );
}
