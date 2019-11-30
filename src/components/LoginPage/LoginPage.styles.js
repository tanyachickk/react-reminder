import styled from "styled-components";
import { overlayBackgroundColor } from "../../constants/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-color: white;
`;

export const AppLogo = styled.img`
  margin: 20px 0 10px;
  width: 70px;
  height: 70px;
`;

export const Content = styled.div`
  min-width: 300px;
  max-width: 350px;
  margin-bottom: 100px;
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${overlayBackgroundColor};
`;
