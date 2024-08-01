import { style } from "@vanilla-extract/css";
import { global } from "@/app/globalTheme.css";

export const backdrop = style({
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  zIndex: 999,
});

export const container = style({
  position: "absolute",
  top: 120,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  borderRadius: 12,
  background: "#f2f2f2",
  padding: 16,
  border: `2px solid ${global.color.blue_1}`,
  minWidth: "40dvw",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const close = style({
  display: "flex",
  justifyContent: "flex-end",
});
