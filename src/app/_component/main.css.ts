import { style } from "@vanilla-extract/css";
import { global } from "@/app/globalTheme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  backgroundColor: global.color.green_2,
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
  fontSize: 28,
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
  height: 160,
  border: `4px solid ${global.color.green_3}`,
  borderRadius: 8,
  padding: 12,
  cursor: "pointer",
  transitionDuration: "0.2s",

  ":hover": {
    boxShadow: "12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
  },
});

export const IconBox = style({
  width: 120,
  height: 80,
  background: "white",
  border: "1px solid #f2f2f2",
  borderRadius: 8,
});
