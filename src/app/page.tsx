"use client"

import GlobalStyles from "@/GlobalStyles";
import { 
  CaixaDePesquisa, 
  Header, 
  ListaDeConversores 
} from "@/components";

import { AppContainer, FlexContainerSpaceBTW } from '@/containers';
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

export default function Home() {
  const { theme } = useTheme();

  console.log(theme);
  return (
    <>
      <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
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
    </>
  );
}
