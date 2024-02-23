"use client"

import { 
  CaixaDePesquisa, 
  Header, 
  ListaDeConversores 
} from "@/components/@index";

import { AppContainer, FlexContainerSpaceBTW } from '@/containers/@index';

export default function Home() {
  return (
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
  );
}
