import styled from "styled-components";
import {
  secondaryTextColor,
  activeTabBackgroundColor,
  highlightTabBackgroundColor,
  borderColor,
  redColor
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-left: 0.75rem;
  height: 2.5rem;
`;

export const Date = styled.div`
  color: ${secondaryTextColor};
  font-size: 12px;
  cursor: pointer;
`;

export const ResetDateContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const ResetDateButton = styled.button`
  color: ${redColor};
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  background-color: ${props =>
    props.active ? activeTabBackgroundColor : "transparent"};

  &:hover {
    background-color: ${props =>
      props.active ? activeTabBackgroundColor : highlightTabBackgroundColor};
  }
  &:hover ${Controls} {
    display: flex;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 46px;
    right: 0;
    height: 1px;
    background-color: ${borderColor};
  }
`;
