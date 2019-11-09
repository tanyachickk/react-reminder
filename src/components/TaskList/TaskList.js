import React from 'react';
import { useTasks } from '../../hooks';
import { useSelectedGroupValue } from '../../context';
import { Container, TaskItem, TaskName } from './TaskList.styled';

export const TaskList = () => {
  const { selectedGroup } = useSelectedGroupValue();
  const { tasks } = useTasks(selectedGroup);

  return (
    <Container>
      {tasks.map(task => (
        <TaskItem key={`${task.id}`}>
          <input type="radio" />
          <TaskName>{task.text}</TaskName>
        </TaskItem>
      ))}
    </Container>
  );
};
