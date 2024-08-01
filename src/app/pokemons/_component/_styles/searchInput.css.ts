import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const close = style({
  padding: 4,
  cursor: "pointer",
});

export const input = style({
  padding: 4,
});
