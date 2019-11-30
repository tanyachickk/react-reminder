import styled from 'styled-components';
import { primaryTextColor, sidebarBackgroundColor } from '../../constants/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: ${primaryTextColor};
  color: ${sidebarBackgroundColor};
  text-align: center;
  font-size: 1rem;
  line-height: 2.25rem;
`;

export const User = styled.div`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
`;
