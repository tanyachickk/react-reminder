import React from 'react';
import { useSelectedGroupValue, useGroupsValue } from '../../context';
import { TaskGroupItem } from '../TaskGroupItem';
import { Container, Item } from './TaskGroupList.styled';

export const TaskGroupList = () => {
  const { selectedGroup, setSelectedGroup } = useSelectedGroupValue();
  const { groups } = useGroupsValue();

  return (
    <Container>
      {groups &&
        groups.map(group => (
          <Item
            key={group.groupId}
            active={group.groupId === selectedGroup}
            onClick={() => {
              setSelectedGroup(group.groupId);
            }}
          >
            <TaskGroupItem group={group} />
          </Item>
        ))}
    </Container>
  );
};
