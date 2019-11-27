import theme from "styled-theming";

export const mainThemeColor = theme("mode", {
  light: "#fff",
  dark: "#000"
});

export const contrastColor = theme("mode", {
  light: "#000",
  dark: "#fff"
});

export const backgroundColor = theme("mode", {
  light: "white",
  dark: "#1f1f1f"
});

export const primaryTextColor = theme("mode", {
  light: "#333",
  dark: "#fff"
});

export const secondaryTextColor = theme("mode", {
  light: "#777",
  dark: "#fff"
});

export const sidebarBackgroundColor = theme("mode", {
  light: "#f0f0f0",
  dark: "#232323"
});

export const headerBackgroundColor = theme("mode", {
  light: "#f2f2f2",
  dark: "#232323"
});

export const borderColor = theme("mode", {
  light: "#d6d6d6",
  dark: "#d6d6d6"
});

export const accentColor = theme("mode", {
  light: "#0070c9",
  dark: "#0070c9"
});

export const activeTabBackgroundColor = theme("mode", {
  light: "#ccc",
  dark: "#ccc"
});

export const highlightTabBackgroundColor = theme("mode", {
  light: "rgba(0,0,0,0.03)",
  dark: "rgba(0,0,0,0.03)"
});

export const buttonBackgroundColor = theme("mode", {
  light: "#222",
  dark: "#eee"
});

export const buttonTextColor = theme("mode", {
  light: "#eee",
  dark: "#222"
});
