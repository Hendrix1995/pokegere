import { createGlobalTheme, createGlobalThemeContract, globalStyle } from "@vanilla-extract/css";

export const global = createGlobalThemeContract({
  color: {
    1: "green-1",
    2: "green-2",
    3: "green-3",
  },
});

createGlobalTheme(":root", global, {
  color: {
    1: "#95CFB2",
    2: "#2FC982",
    3: "#1F9058",
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
  background: global.color[3],
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
