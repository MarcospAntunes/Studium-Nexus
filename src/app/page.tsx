"use client"

import GlobalStyles from "@/GlobalStyles";
import { 
  SearchBox, 
  Header, 
  ListConverter 
} from "@/components";

import { AppContainer, FlexContainerSpaceBTW } from '@/containers';
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

export default function Home() {
  const { theme } = useTheme();

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
              <SearchBox />
            </FlexContainerSpaceBTW>
            <ListConverter />
          </section>
        </main>
      </AppContainer>
    </>
  );
}
