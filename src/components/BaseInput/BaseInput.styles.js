import styled from "styled-components";
import { borderColor, accentColor } from "../../constants/theme";

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: none;
  border: 1px solid ${borderColor};
  color: inherit;
  background-clip: padding-box;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.25em;
  letter-spacing: -0.022em;
  outline: none;

  &:focus {
    border-color: ${accentColor};
  }
`;
