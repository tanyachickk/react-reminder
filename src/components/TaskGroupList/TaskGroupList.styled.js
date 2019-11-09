import styled from 'styled-components';
import { accentColor, primaryTextColor } from '../../constants/theme';

export const Container = styled.ul``;

export const Item = styled.li`
  color: ${props => (props.active ? 'white' : primaryTextColor)};
  background: ${props => (props.active ? accentColor : 'transparent')};
  cursor: pointer;

  &:hover {
  }
`;
