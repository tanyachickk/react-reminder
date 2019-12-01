import styled, { css } from "styled-components";
import {
  borderColor,
  primaryTextColor,
  backgroundColor,
  highlightBackgroundColor,
  buttonPrimaryBg,
  buttonPrimaryHoverBg,
  buttonPrimaryBorderColor,
  buttonPrimaryHoverBorderColor,
  buttonPrimaryActiveBg,
  buttonPrimaryActiveBorderColor
} from "../../constants/theme";

export const Button = styled.button`
  color: ${primaryTextColor};
  line-height: 1;
  padding: ${props => (props.withPadding ? "0.4em 1.5em" : "0 1em")};
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  border-radius: 4px;
  font-size: inherit;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${highlightBackgroundColor};
  }

  &:active {
    background-color: ${borderColor};
  }

  ${props =>
    props.color === "primary" &&
    css`
      color: white;
      background-image: ${buttonPrimaryBg};
      border-color: ${buttonPrimaryBorderColor};

      &:hover {
        background-image: ${buttonPrimaryHoverBg};
        border-color: ${buttonPrimaryHoverBorderColor};
      }

      &:active {
        background-image: ${buttonPrimaryActiveBg};
        border-color: ${buttonPrimaryActiveBorderColor};
      }
    `}
`;
