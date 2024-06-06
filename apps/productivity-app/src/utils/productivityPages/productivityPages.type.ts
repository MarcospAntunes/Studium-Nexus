import React from "react";

type Pages = {
  [key: string]: {
    title: string;
    Page: () => React.JSX.Element;
  };
};

export type { Pages };
