import { Footer, LazyLoadedText } from "@studium-nexus/components-commons";
import { Header } from "@studium-nexus/converter-app/src/components";
import { AppContainer } from "@studium-nexus/converter-app/src/containers";
import SobreStyled from "./Sobre.style";

function Sobre(): JSX.Element {
  return (
    <AppContainer>
      <Header menu />
      <SobreStyled>
        <h1>Sobre a Studium Nexus</h1>
        <LazyLoadedText>
          A Studium Nexus é um projeto desenvolvido e mantido por{" "}
          <a href="https://github.com/MarcospAntunes" target="_blank">
            Marcos Antunes
          </a>
          . Este projeto foi idealizado em 2023, iniciando como apenas um
          conversor de medidas e, em 2024, ganhou tamanho e se tornou mais que
          um conversor, tornou-se uma plataforma de auxílio nos estudos para que
          as pessoas pudessem encontrar de maneira rápida e facíl soluções que
          as ajudem em seus estudos.
        </LazyLoadedText>
        <LazyLoadedText>
          Atualmente a plataforma ainda está em desenvolvimento e, por isso, seu
          feedback tem importância para nôs!
        </LazyLoadedText>
      </SobreStyled>
      <Footer />
    </AppContainer>
  );
}

export default Sobre;
