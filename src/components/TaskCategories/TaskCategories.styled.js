import styled from "styled-components";
import {
  activeTabBackgroundColor,
  highlightBackgroundColor,
  primaryTextColor
} from "../../constants/theme";

export const Container = styled.ul``;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  color: ${primaryTextColor};
  background: ${props =>
    props.active ? activeTabBackgroundColor : "transparent"};
  cursor: ${props => (props.active ? "default" : "pointer")};

  &:hover {
    background-color: ${props =>
      props.active ? activeTabBackgroundColor : highlightBackgroundColor};
  }
`;

export const CategoryName = styled.div`
  margin-left: 0.5rem;
`;
