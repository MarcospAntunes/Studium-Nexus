import React from "react";
import { LibrasTranslatorScreen } from "../../screens";

type Pages = {
  [key: string]: {
    title: string;
    Page: () => React.JSX.Element;
  };
};

const AiPages: Pages = {
  "libras-translator": {
    title: "Tradutor de Libras",
    Page: LibrasTranslatorScreen,
  }
};

export default AiPages;
