import React from "react";

type Pages = {
  [key: string]: {
    title: string;
    Page: () => React.JSX.Element;
  };
};

const AiPages: Pages = {};

export default AiPages;
