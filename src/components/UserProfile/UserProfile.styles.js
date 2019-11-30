import styled from "styled-components";
import { contrastColor, overlayBackgroundColor } from "../../constants/theme";

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
  background-color: white;
  box-shadow: 0 -10px 20px 5px rgba(0, 0, 0, 0.1);
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
