import { style } from "@vanilla-extract/css";
import { global } from "@/app/globalTheme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  backgroundColor: global.color[2],
  color: "white",
  fontSize: 32,
  padding: 24,
  margin: 24,
  borderRadius: 8,
});

export const navBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  fontSize: 24,
});

export const menuBox = style({
  display: "flex",
  alignItems: "center",
  gap: 24,
  textAlign: "center",
});

export const menu = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 160,
  height: 200,
  border: `4px solid ${global.color[3]}`,
  borderRadius: 8,
  padding: 12,
});

export const IconBox = style({
  height: 140,
  background: "white",
});
