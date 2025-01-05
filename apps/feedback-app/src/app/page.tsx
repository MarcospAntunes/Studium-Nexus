"use client";

import { Button, Footer } from "@studium-nexus/components-commons";
import { Header } from "@studium-nexus/converter-app/src/components";
import { AppContainer } from "@studium-nexus/converter-app/src/containers";
import FeedbackStyled from "./Feedback.style";
import { useTheme } from "@studium-nexus/converter-app/src/hooks";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import { useFeedback } from "../hooks";
import { CustomCheckbox } from "../components";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { handleSubmit } from "../utils";

function Feedback(): JSX.Element {
  const { theme } = useTheme();
  const {
    selectedfunctionalities,
    setSelectedfunctionalities,
    feedbackType,
    setFeedbackType,
    describeBug,
    setDescribeBug,
    suggestionsForImprovements,
    setSuggestionsForImprovements,
    clear,
  } = useFeedback();

  const handleClick = (name: string) => {
    if (selectedfunctionalities.includes(name)) {
      const temp = selectedfunctionalities.filter((value) => value !== name);
      setSelectedfunctionalities!(temp);
    } else {
      setSelectedfunctionalities!((prev: string[]) => [...prev, name]);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadGapi = async () => {
        try {
          await gapi.load("client:auth2", async () => {
            await gapi.client.init({
              apiKey: "",
              clientId:
                "333316478964-1r63ngfnokkgpuvpclai1jo1hvi3824b.apps.googleusercontent.com",
              discoveryDocs: [
                "https://sheets.googleapis.com/$discovery/rest?version=v4",
              ],
              scope: "https://www.googleapis.com/auth/spreadsheets",
            });

            const authInstance = gapi.auth2.getAuthInstance();
            const isSignedIn = authInstance.isSignedIn.get();
            if (!isSignedIn) {
              await authInstance.signIn();
            }

            const grantedScopes = authInstance.currentUser
              .get()
              .getGrantedScopes();
            if (
              !grantedScopes.includes(
                "https://www.googleapis.com/auth/spreadsheets",
              )
            ) {
              await authInstance.signIn({
                scope: "https://www.googleapis.com/auth/spreadsheets",
              });
            }
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Erro ao inicializar gapi:", error);
        }
      };
      loadGapi();
    }
  }, []);

  return (
    <AppContainer>
      <Header menu />
      <FeedbackStyled theme={theme === "dark" ? darkTheme : lightTheme}>
        <h1>Nos deixe saber sua opinião preenchendo o forms abaixo!</h1>
        <form
          action="#"
          onSubmit={(e) =>
            handleSubmit({
              e,
              describeBug,
              feedbackType,
              selectedfunctionalities,
              suggestionsForImprovements,
              clear,
            })
          }
        >
          <fieldset className="radio-group">
            <legend>Tipo de feedback</legend>
            <div>
              <input
                type="radio"
                name="Tipo de feedback"
                id="design"
                value="Design"
                required
                onChange={(e) => setFeedbackType!(e.currentTarget.value)}
              />
              <label htmlFor="design">Problema com design</label>
            </div>
            <div>
              <input
                type="radio"
                name="Tipo de feedback"
                id="bug"
                value="Bug"
                onChange={(e) => setFeedbackType!(e.currentTarget.value)}
              />
              <label htmlFor="bug">Relatar bug</label>
            </div>
            <div>
              <input
                type="radio"
                name="Tipo de feedback"
                id="melhorias"
                value="Melhorias"
                onChange={(e) => setFeedbackType!(e.currentTarget.value)}
              />
              <label htmlFor="melhorias">Melhorias</label>
            </div>
            <div>
              <input
                type="radio"
                name="Tipo de feedback"
                id="outros"
                value="Outros"
                onChange={(e) => setFeedbackType!(e.currentTarget.value)}
              />
              <label htmlFor="outros">Outros...</label>
            </div>
          </fieldset>
          <fieldset className="checkbox-group">
            <legend>
              Em caso de bugs, qual ferramenta está tendo problemas?
            </legend>
            <CustomCheckbox
              htmlFor="Conversor de Peso"
              name="Conversor de Peso"
              text="Conversor de Peso"
              id="conversorDePeso"
              onClick={() => handleClick("Conversor de Peso")}
            />
            <CustomCheckbox
              htmlFor="Conversor de Comprimento"
              name="Conversor de Comprimento"
              text="Conversor de Comprimento"
              id="conversorDeComprimento"
              onClick={() => handleClick("Conversor de Comprimento")}
            />
            <CustomCheckbox
              htmlFor="Conversor de Temperatura"
              name="Conversor de Temperatura"
              text="Conversor de Temperatura"
              id="conversorDeTemperatura"
              onClick={() => handleClick("Conversor de Temperatura")}
            />
            <CustomCheckbox
              htmlFor="Conversor de Midia"
              name="Conversor de Midia"
              text="Conversor de Mídia"
              id="conversorDeMidia"
              onClick={() => handleClick("Conversor de Midia")}
            />
            <CustomCheckbox
              htmlFor="Conversor de Documento"
              name="Conversor de Documento"
              text="Conversor de Documento"
              id="conversorDeDocumento"
              onClick={() => handleClick("Conversor de Documento")}
            />
            <CustomCheckbox
              htmlFor="Conversor de Energia"
              name="Conversor de Energia"
              text="Conversor de Energia"
              id="conversorDeEnergia"
              onClick={() => handleClick("Conversor de Energia")}
            />
            <CustomCheckbox
              htmlFor="Conversor de Velocidade"
              name="Conversor de Velocidade"
              text="Conversor de Velocidade"
              id="conversorDeVelocidade"
              onClick={() => handleClick("Conversor de Velocidade")}
            />
            <CustomCheckbox
              htmlFor="Conversor de Moedas"
              name="Conversor de Moedas"
              text="Conversor de Moedas"
              id="conversorDePeso"
              onClick={() => handleClick("Conversor de Moedas")}
            />
            <CustomCheckbox
              htmlFor="Formula de Bhaskara"
              name="Formula de Bhaskara"
              text="Fórmula de Bhaskara"
              id="formulaDeBhaskara"
              onClick={() => handleClick("Formula de Bhaskara")}
            />
            <CustomCheckbox
              htmlFor="Media Aritmetica"
              name="Media Aritmetica"
              text="Média Aritmética"
              id="mediaAritmetica"
              onClick={() => handleClick("Media Aritmetica")}
            />
            <CustomCheckbox
              htmlFor="Juros Simples"
              name="Juros Simples"
              text="Juros Simples"
              id="jurosSimples"
              onClick={() => handleClick("Juros Simples")}
            />
            <CustomCheckbox
              htmlFor="Juros Compostos"
              name="Juros Compostos"
              text="Juros Compostos"
              id="jurosCompostos"
              onClick={() => handleClick("Juros Compostos")}
            />
            <CustomCheckbox
              htmlFor="Pomodoro"
              name="Pomodoro"
              text="Pomodoro"
              id="pomodoro"
              onClick={() => handleClick("Pomodoro")}
            />
            <CustomCheckbox
              htmlFor="To do List"
              name="To do List"
              text="To do List"
              id="ToDoList"
              onClick={() => handleClick("To do List")}
            />
          </fieldset>

          <fieldset>
            <legend>Descreva o bug que está tendo</legend>
            <textarea
              name="Descreva o bug"
              id="describeBug"
              placeholder="Descreva..."
              value={describeBug}
              onChange={(e) => setDescribeBug!(e.currentTarget.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Sugestões de melhorias</legend>
            <textarea
              name="Sugestões de melhorias"
              id="suggestionsForImprovements"
              placeholder="Descreva..."
              value={suggestionsForImprovements}
              onChange={(e) =>
                setSuggestionsForImprovements!(e.currentTarget.value)
              }
            />
          </fieldset>

          <div id="buttons">
            <Button onClick={() => clear()} type="reset" role="button">
              Apagar
            </Button>
            <Button onClick={() => ""} type="submit" role="button">
              Enviar
            </Button>
          </div>
        </form>
      </FeedbackStyled>
      <Footer />
    </AppContainer>
  );
}

export default Feedback;
