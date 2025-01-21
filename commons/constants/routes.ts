import { routes } from "./routes.type";

const converterRoutes: routes = {
  tempo: "tempo",
  peso: "peso",
  temperatura: "temperatura",
  velocidade: "velocidade",
  comprimento: "comprimento",
  energia: "energia",
  documento: "documento",
  moeda: "moeda",
  midia: "midia",
};

const formulaRoutes = {
  bhaskara: "bhaskara",
  "media-aritmetica": "media-aritmetica",
  "juros-simples": "juros-simples",
  "juros-compostos": "juros-compostos",
};

const productivityRoutes = {
  pomodoro: "pomodoro",
  "to-do-list": "to-do-list",
  graficos: "graficos",
  calendario: "calendario",
};

const AIRoutes = {
  "tradutor-linguagem-de-sinais": "tradutor-linguagem-de-sinais",
};

export { converterRoutes, formulaRoutes, productivityRoutes, AIRoutes };
