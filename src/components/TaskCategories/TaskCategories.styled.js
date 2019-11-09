import styled from 'styled-components';
import { accentColor, primaryTextColor } from '../../constants/theme';

export const Container = styled.ul``;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  color: ${props => (props.active ? 'white' : primaryTextColor)};
  background: ${props => (props.active ? accentColor : 'transparent')};
  cursor: pointer;

  &:hover {
  }
`;

export const CategoryName = styled.div`
  margin-left: 0.5rem;
`;
