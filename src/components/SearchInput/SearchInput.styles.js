import styled, { css } from "styled-components";
import {
  borderColor,
  secondaryTextColor,
  backgroundColor,
  primaryTextColor
} from "../../constants/theme";

export const Container = styled.div`
  position: relative;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    `}
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 1.75rem;
  border-radius: 0.25rem;
  border: 1px solid ${borderColor};
  background-color: ${backgroundColor};
  color: ${primaryTextColor};
  font-size: 0.75rem;
  line-height: 1.25rem;
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  height: 16px;
  color: ${secondaryTextColor};
  transform: translateY(-50%);
`;
