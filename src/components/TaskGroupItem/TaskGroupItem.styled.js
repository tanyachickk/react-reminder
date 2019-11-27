import styled from "styled-components";
import {
  secondaryTextColor,
  activeTabBackgroundColor,
  highlightTabBackgroundColor
} from "../../constants/theme";

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: ${secondaryTextColor};
  transition: opacity 0.2s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: ${secondaryTextColor};
  transition: opacity 0.2s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Controls = styled.div`
  display: none;
  align-items: center;
  margin-left: auto;
  padding-left: 0.5rem;
`;

export const ColoredDot = styled.div`
  margin-right: 0.5rem;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: black;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  background-color: ${props =>
    props.active ? activeTabBackgroundColor : "transparent"};
  cursor: ${props => (props.active ? "default" : "pointer")};

  &:hover {
    background-color: ${props =>
      props.active ? activeTabBackgroundColor : highlightTabBackgroundColor};
  }
  &:hover ${Controls} {
    display: flex;
  }
`;
