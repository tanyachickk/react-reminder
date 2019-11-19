import styled from "styled-components";
import { borderColor } from "../../constants/theme";

export const Container = styled.div``;

export const Input = styled.input`
  width: 100%;
  padding-left: 1.75rem;
  border-radius: 0.25rem;
  border: none;
  border: ${props => (props.underline ? `1px solid ${borderColor}` : "none")};
  font-size: 1em;
  line-height: 1.25em;
  outline: none;
`;
