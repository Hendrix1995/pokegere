import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const close = style({
  display: "flex",
  justifyContent: "flex-end",
  padding: 4,
  cursor: "pointer",
});
