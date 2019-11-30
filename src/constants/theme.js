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

export const highlightBackgroundColor = theme("mode", {
  light: "rgba(0,0,0,0.02)",
  dark: "rgba(0,0,0,0.02)"
});

export const shadowColor = theme("mode", {
  light: "rgba(0,0,0,0.05)",
  dark: "rgba(0,0,0,0.05)"
});

export const overlayBackgroundColor = theme("mode", {
  light: "rgba(255,255,255,0.5)",
  dark: "rgba(0,0,0,0.5)"
});

export const buttonPrimaryBg = "linear-gradient(#42a1ec,#0070c9)";
export const buttonPrimaryHoverBg = "linear-gradient(#51a9ee,#147bcd)";
export const buttonPrimaryActiveBg = "linear-gradient(#3d94d9,#0067b9)";

export const buttonPrimaryBorderColor = "#07c";
export const buttonPrimaryHoverBorderColor = "#1482d0";
export const buttonPrimaryActiveBorderColor = "#006dbc";

export const buttonTextColor = theme("mode", {
  light: "#eee",
  dark: "#222"
});

export const redColor = "#ff3b30";
export const yellowColor = "#ffcc00";
export const tealColor = "#5ac8fa";
export const purpleColor = "#af52de";
export const pinkColor = "#ff2d55";
export const orangeColor = "#ff9501";
export const indigoColor = "#5856d6";
export const greenColor = "#34c759";
export const blueColor = "#007aff";
