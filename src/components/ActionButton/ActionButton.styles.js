import styled from "styled-components";
import {
  accentColor,
  borderColor,
  primaryTextColor,
  shadowColor,
  backgroundColor,
  highlightBackgroundColor
} from "../../constants/theme";

export const Button = styled.button`
  color: ${primaryTextColor};
  line-height: 1;
  padding: 0 8px;
  border: 1px solid ${borderColor};
  background-color: ${backgroundColor};
  border-radius: 4px;
  box-shadow: 0 2px 3px 1px ${shadowColor};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${highlightBackgroundColor};
  }

  &:active {
    color: white;
    background-color: ${accentColor};
    box-shadow: none;
    border: none;
  }
`;
