import styled from "styled-components";
import { contrastColor } from "../../constants/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
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
