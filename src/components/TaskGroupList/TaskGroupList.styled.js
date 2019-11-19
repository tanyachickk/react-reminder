import styled from "styled-components";
import {
  highlightColor,
  primaryTextColor,
  secondaryTextColor,
  sidebarBackgroundColor
} from "../../constants/theme";

export const Container = styled.div``;

export const List = styled.ul``;

export const Item = styled.li`
  color: ${primaryTextColor};
  background: ${props => (props.active ? highlightColor : "transparent")};
  cursor: pointer;

  &:hover {
  }
`;

export const AddButton = styled.button`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${sidebarBackgroundColor};
  color: ${secondaryTextColor};
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

export const AddButtonText = styled.span`
  margin-left: 0.5rem;
`;
