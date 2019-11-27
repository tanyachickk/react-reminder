import styled from "styled-components";
import {
  primaryTextColor,
  secondaryTextColor,
  sidebarBackgroundColor
} from "../../constants/theme";

export const Container = styled.div``;

export const List = styled.ul`
  padding-bottom: 0.5rem;
`;

export const Item = styled.li`
  color: ${primaryTextColor};
  cursor: pointer;
`;

export const AddInputContainer = styled.div`
  padding: 0 2rem;
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
  outline: none;
  cursor: pointer;
`;

export const AddButtonText = styled.span`
  margin-left: 0.5rem;
`;
