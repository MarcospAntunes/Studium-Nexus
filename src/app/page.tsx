"use client"

import { 
  CaixaDePesquisa, 
  Header, 
  ListaDeConversores 
} from "@/components";

import { AppContainer, FlexContainerSpaceBTW } from '@/containers';

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <main>
        <section>
          <h2>O seu Converor rápido e fácil de usar</h2>
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
