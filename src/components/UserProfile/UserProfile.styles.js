import styled from "styled-components";
import posed from "react-pose";
import {
  contrastColor,
  overlayBackgroundColor,
  redColor,
  borderColor,
  primaryTextColor,
  secondaryTextColor,
  backgroundColor
} from "../../constants/theme";

export const PoseOverlay = posed.div({
  enter: {
    opacity: 1
  },
  exit: {
    delay: 100,
    opacity: 0
  }
});

export const PoseContent = posed.div({
  enter: {
    x: 0,
    delay: 100,
    beforeChildren: true,
    transition: {
      ease: "linear",
      duration: 400
    }
  },
  exit: {
    x: "100%",
    beforeChildren: true,
    transition: {
      ease: "linear",
      duration: 300
    }
  }
});

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${overlayBackgroundColor};
  z-index: 100;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 340px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${backgroundColor};
  box-shadow: 0 -10px 20px 5px rgba(0, 0, 0, 0.1);
`;

export const AvatarContainer = styled.div`
  align-self: center;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const UsernameContainer = styled.div`
  margin: 12px 0;
  padding: 4px 10px;
  font-size: 16px;
  color: ${primaryTextColor};
  border-bottom: 1px solid ${borderColor};
`;

export const EmailContainer = styled.div`
  margin: 12px 0;
  padding: 4px 10px;
  font-size: 16px;
  color: ${secondaryTextColor};
  border-bottom: 1px solid ${borderColor};
  cursor: default;
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10vh 0 12px;
  padding: 0 10px;
  font-size: 14px;
  color: ${primaryTextColor};
`;

export const NotificationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  padding: 0 10px;
  font-size: 14px;
  color: ${primaryTextColor};
`;

export const Text = styled.h1`
  margin-left: 10px;
  color: ${contrastColor};
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.01rem;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;

export const LogoutButton = styled.button`
  margin-top: auto;
  background-color: transparent;
  color: ${redColor};
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
