import CaixaDePesquisa from "@/components/CaixaDePesquisa";
import Header from "@/components/Header";
import ListaDeConversores from "@/components/ListaDeConversores";
import AppContainer from "@/containers/AppContainer";
import { FlexContainerSpaceBTW } from "@/containers/FlexContainer";

export default function Home() {
  return (
    <>
      <AppContainer>
        <Header />
        <main>
          <section>
            <h2 style={{ marginBottom: '20px' }}>O seu Converor rápido e fácil de usar</h2>
            <FlexContainerSpaceBTW>
              <h3>Conversores</h3>
              <CaixaDePesquisa />
            </FlexContainerSpaceBTW>
            <ListaDeConversores />
          </section>
        </main>
      </AppContainer>
    </>
  );
}
