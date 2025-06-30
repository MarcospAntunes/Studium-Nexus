import typeThemes from "./themes.type";

const darkTheme: typeThemes = {
  body: "#2D2D2D",
  text: "#FFFFFF",
  textHover: "#000000",
  bgCard: "#292929",
  bgCardHover: "#f6f6f6",
  shadown: "rgba(89, 89, 89, 0.25)",
  bgInput: "#2D2D2D",
  bgSearch: "#282828",
  bgButton: "#2D2D2D",
  buttonTudo: "#cacde8",
  bgConverter: "#292929",
  disabled: "#8f8f8f",
  textDisabled: "white",
  bgCalendar: "#FFFFFF",
  bgDays: "#B0B0B0",
  invert: 1,
  invertHover: 0,
};

const lightTheme: typeThemes = {
  body: "#FFFFFF",
  text: "#000000",
  textHover: "#FFFFFF",
  bgCard: "#f6f6f6",
  bgCardHover: "#292929",
  shadown: "rgba(0, 0, 0, 0.25)",
  bgInput: "#FFFFFF",
  bgSearch: "#EFEFEF",
  bgButton: "#D9D9D9",
  buttonTudo: "#323350",
  bgConverter: "#EFEFEF",
  disabled: "#8f8f8f",
  textDisabled: "white",
  bgCalendar: "#2D2D2D",
  bgDays: "#424242",
  invert: 0,
  invertHover: 1,
};

export { darkTheme, lightTheme };
