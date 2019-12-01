import styled from "styled-components";
import {
  overlayBackgroundColor,
  primaryTextColor,
  secondaryTextColor
} from "../../constants/theme";

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
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: ${primaryTextColor};
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${secondaryTextColor};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const ActionButtonContainer = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;
