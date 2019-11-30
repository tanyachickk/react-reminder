import styled from "styled-components";
import { overlayBackgroundColor } from "../../constants/theme";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${overlayBackgroundColor};
`;

export const Content = styled.div`
  max-width: 400px;
`;

export const Body = styled.div`
  display: flex;
`;

export const Title = styled.h3``;

export const Text = styled.div``;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;
