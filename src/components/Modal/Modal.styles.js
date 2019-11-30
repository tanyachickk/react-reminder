import styled from "styled-components";
import posed from "react-pose";
import { overlayBackgroundColor, backgroundColor } from "../../constants/theme";

const PoseOverlay = posed.div({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

const PoseContent = posed.div({
  enter: {
    y: 0
  },
  exit: {
    y: "-20%"
  }
});

export const Overlay = styled(PoseOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5vh;
  background-color: ${overlayBackgroundColor};
`;

export const Content = styled(PoseContent)`
  padding: 20px;
  background-color: ${backgroundColor};
`;
