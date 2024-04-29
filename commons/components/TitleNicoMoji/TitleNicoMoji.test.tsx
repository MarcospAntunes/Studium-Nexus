import { render } from "@testing-library/react";
import TitleNicoMoji from "./index";
import { toBeInTheDocument } from "../../tests";

const Component = render(<TitleNicoMoji>Studium Nexus</TitleNicoMoji>);
(Component.container.style.fontFamily = "__NicoMoji_77a177"),
  "__NicoMoji_Fallback_77a177";

toBeInTheDocument({
  Element: Component,
  fn: "getByText",
  text: "Studium Nexus",
  describeText: "TitleNicoMoji Component",
});

describe("TitleNicoMoji Component", () => {
  test("Should have Nico Moji font", () => {
    expect(Component.container.style.fontFamily).toContain("__NicoMoji_77a177");
  });
});
