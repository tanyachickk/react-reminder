import React, { useRef } from "react";
import { withTheme } from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { Container, Overlay } from "./UserProfile.styles";
import { useAuth } from "../../hooks/useAuth";

const UserProfile = ({ theme, onClose }) => {
  const themeToggle = useTheme();
  const overlayRef = useRef();
  const [, { signOut }] = useAuth();

  const onOverlayClick = e => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <Overlay ref={overlayRef} onClick={onOverlayClick}>
      <Container>
        <h1>Profile</h1>
        <div>
          <button onClick={() => themeToggle.toggle()}>
            {theme.mode === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"}
          </button>
        </div>
        <button onClick={signOut}>Logout</button>
      </Container>
    </Overlay>
  );
};

export default withTheme(UserProfile);
