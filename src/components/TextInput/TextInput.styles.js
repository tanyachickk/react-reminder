import styled, { css } from "styled-components";
import { borderColor, mainThemeColor } from "../../constants/theme";

export const Container = styled.div``;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.25rem;
  border: none;
  border: ${props => (props.underline ? `1px solid ${borderColor}` : "none")};
  font-size: 1em;
  line-height: 1.25em;
  background-color: ${props =>
    props.isEditMode && props.showBackgroundOnFocus
      ? mainThemeColor
      : "transparent"};
  outline: none;
  color: inherit;
  cursor: ${props => (props.readOnly ? "default" : "text")};

  ${props =>
    !props.isEditMode &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;
