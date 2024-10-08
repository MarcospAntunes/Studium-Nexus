import { Footer, LazyLoadedText } from "@studium-nexus/components-commons";
import { Header } from "@studium-nexus/converter-app/src/components";
import MainPrivacy from "./PrivacityPolicy.style";
import { AppContainer } from "@studium-nexus/converter-app/src/containers";

function PrivacyPolicy(): JSX.Element {
  return (
    <AppContainer>
      <Header menu />
      <MainPrivacy>
        <div>
          <h1>Política de Privacidade da Studium Nexus</h1>
          <LazyLoadedText>
            Esta Política de Privacidade explica como o Studium Nexus coleta,
            utiliza e protege as informações dos usuários ao acessar nosso site.
          </LazyLoadedText>
          <h2>Coleta de Informações</h2>
          <LazyLoadedText>
            Nosso site utiliza a tecnologia de LocalStorage para armazenar dados
            no navegador do usuário. Essas informações são usadas exclusivamente
            para melhorar a experiência no site, como salvar preferências e
            configurações, e não incluem dados pessoais sensíveis ou
            rastreamento de atividades em outros sites.
          </LazyLoadedText>
          <h2>Google AdSense e Cookies</h2>
          <LazyLoadedText>
            Utilizamos o Google AdSense para exibir anúncios relevantes aos
            usuários. O Google, como fornecedor de terceiros, pode utilizar
            cookies para exibir anúncios com base nas visitas anteriores ao
            nosso site ou a outros sites na internet. Esses cookies permitem ao
            Google e seus parceiros personalizar os anúncios com base nas suas
            visitas anteriores.
          </LazyLoadedText>
          <h2>O que são Cookies?</h2>
          <LazyLoadedText>
            Cookies são pequenos arquivos armazenados no dispositivo do usuário
            que ajudam a personalizar a experiência de navegação. Os cookies de
            publicidade usados pelo Google permitem que anúncios mais relevantes
            sejam exibidos de acordo com os interesses dos usuários.
          </LazyLoadedText>
          <h2>Como o Google utiliza esses dados?</h2>
          <LazyLoadedText>
            O Google pode coletar informações sobre seu navegador, endereço IP,
            páginas visitadas e interações com anúncios. Esses dados são usados
            para melhorar a relevância dos anúncios exibidos.
          </LazyLoadedText>
          <h2>Controle dos Dados e Desativação de Cookies</h2>
          <LazyLoadedText>
            Os usuários podem gerenciar ou desativar os cookies diretamente nas
            configurações do navegador. No entanto, desativar os cookies pode
            impactar negativamente algumas funcionalidades do site. &nbsp; Para
            saber mais sobre como o Google utiliza cookies na publicidade,
            visite a{" "}
            <a href="https://policies.google.com/privacy">
              Política de Privacidade do Google
            </a>
            . Se desejar desativar a personalização de anúncios do Google,
            acesse a página de Configurações de Anúncios.
          </LazyLoadedText>
          <h2>Direitos dos Usuários</h2>
          <LazyLoadedText>Os usuários têm o direito de:</LazyLoadedText>
          <ul>
            <li>
              Gerenciar e excluir as informações armazenadas no LocalStorage por
              meio das configurações do navegador.
            </li>
            <li>
              Controlar o uso de cookies e desativá-los conforme sua
              preferência.
            </li>
          </ul>
          <h2>Alterações na Política de Privacidade</h2>
          <LazyLoadedText>
            Podemos atualizar esta Política de Privacidade periodicamente para
            refletir mudanças em nossos serviços ou nas regulamentações
            aplicáveis. Recomendamos que os usuários revisem esta página
            regularmente para estar cientes de quaisquer alterações.
          </LazyLoadedText>
          <h2>Contato</h2>
          <LazyLoadedText>
            Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco através de nosso e-mail de suporte:
            marcospantunes203@gmail.com
          </LazyLoadedText>
        </div>
      </MainPrivacy>
      <Footer />
    </AppContainer>
  );
}

export default PrivacyPolicy;
