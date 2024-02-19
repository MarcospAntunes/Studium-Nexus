import CaixaDePesquisa from "@/components/CaixaDePesquisa";
import Header from "@/components/Header";
import ListaDeConversores from "@/components/ListaDeConversores";
import AppContainer from "@/containers/appContainer";

export default function Home() {
  return (
    <>
      <AppContainer>
        <Header />
        <main>
          <section>
            <h2 style={{ marginBottom: '20px' }}>O seu Converor rápido e fácil de usar</h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <h3>Conversores</h3>
              <CaixaDePesquisa />
            </div>
            <ListaDeConversores />
          </section>
        </main>
      </AppContainer>
    </>
  );
}
