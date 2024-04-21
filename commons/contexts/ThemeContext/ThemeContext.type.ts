import { Dispatch, SetStateAction } from "react";

type ThemeContextProps = {
  themeToggler: () => void;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export default ThemeContextProps;
