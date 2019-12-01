import styled from "styled-components";
import { primaryTextColor } from "../../constants/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.div`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${primaryTextColor};
`;
