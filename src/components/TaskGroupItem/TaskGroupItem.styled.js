import styled from 'styled-components';

export const DeleteButton = styled.button`
  margin-left: auto;
  opacity: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;

  &:hover ${DeleteButton} {
    opacity: 1;
  }
`;

export const ColoredDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: black;
`;

export const TaskName = styled.div`
  margin-left: 0.5rem;
`;
