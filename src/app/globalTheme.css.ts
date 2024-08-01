import { createGlobalTheme, createGlobalThemeContract, globalStyle } from "@vanilla-extract/css";

export const global = createGlobalThemeContract({
  color: {
    green_1: "green_1",
    green_2: "green_2",
    green_3: "green_3",
    blue_1: "blue_1",
    gray_1: "gray_1",
    gray_2: "gray_2",
  },
});

createGlobalTheme(":root", global, {
  color: {
    green_1: "#95CFB2",
    green_2: "#2FC982",
    green_3: "#1F9058",
    blue_1: "#457DCB",
    gray_1: "#8E9DAD",
    gray_2: "#46617F",
  },
});

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});
globalStyle("html, body", {
  maxWidth: "100dvw",
  overflowX: "hidden",
  background: global.color.green_3,
});
globalStyle("body", {
  color: "black",
});
globalStyle("ul", {
  listStyle: "none",
});
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
