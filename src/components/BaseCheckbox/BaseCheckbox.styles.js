import styled, { css } from "styled-components";
import {
  borderColor,
  mainThemeColor,
  accentColor
} from "../../constants/theme";

export const Label = styled.label`
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid ${borderColor};
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${props => props.color || accentColor};
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0;
    transition: all 0.1s ease-in-out;
  }

  ${props =>
    props.active &&
    css`
      &::after {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    `}
`;

export const Input = styled.input`
  visibility: hidden;
`;
