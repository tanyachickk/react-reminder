import styled from 'styled-components';
import { borderColor } from '../../constants/theme';

export const Container = styled.ul``;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
`;

export const TaskName = styled.div`
  flex-grow: 1;
  margin-left: 0.75rem;
  line-height: 2.5rem;
  border-bottom: 1px solid ${borderColor};
`;
