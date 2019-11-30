import React from "react";
import { FaPalette } from "react-icons/fa";
import { withTheme } from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { Container } from "./Header.styles";

const Header = ({ theme }) => {
  const themeToggle = useTheme();

  return (
    <Container>
      <input placeholder="Search Task" />
      <ul>
        <li>
          <button onClick={() => themeToggle.toggle()}>
            {theme.mode === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"}
          </button>
        </li>
        <li>
          <FaPalette />
        </li>
      </ul>
    </Container>
  );
};

export default withTheme(Header);
