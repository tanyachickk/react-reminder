import React, { useState, useEffect, createContext, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, primaryTextColor } from "../constants/theme";

const ThemeToggleContext = createContext();

export const useTheme = () => useContext(ThemeToggleContext);

export const AppThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: "light"
  });

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
      theme = themeState.mode;
      localStorage.setItem("theme", theme);
    }
    setTheme(theme);
    setThemeState({ mode: theme });
  }, []);

  const Wrapper = styled.div`
    height: 100%;
    background-color: ${backgroundColor};
    color: ${primaryTextColor};
  `;

  const toggle = () => {
    const mode = themeState.mode === "light" ? `dark` : `light`;
    setThemeState({ mode: mode });
    localStorage.setItem("theme", mode);
  };

  const setTheme = mode => {
    if (mode === "light" || mode === "dark") {
      setThemeState({ mode: mode });
      localStorage.setItem("theme", mode);
    }
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle, setTheme }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
