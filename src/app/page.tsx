import {
  SearchBox,
  Header,
  ListConverter,
  BackToTop,
  Slogan
} from "@/components";

import { AppContainer, FlexContainerSpaceBTW } from '@/containers';

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
          <ListConverter />
        </section>
      </main>
      <BackToTop />
    </AppContainer>
  );
}
