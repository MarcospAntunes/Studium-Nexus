import { Header, BackToTop } from "@studium-nexus/components-commons";

import { SearchBox, List, Slogan } from "../components/";

import {
  AppContainer,
  FlexContainerSpaceBTW,
} from "@studium-nexus/containers-commons";

export default async function Home() {
  return (
    <AppContainer>
      <Header />
      <main>
        <section>
          <Slogan />
          <FlexContainerSpaceBTW>
            <h3>Funcionalidades</h3>
            <SearchBox />
          </FlexContainerSpaceBTW>
          <List />
        </section>
      </main>
      <BackToTop />
    </AppContainer>
  );
}
