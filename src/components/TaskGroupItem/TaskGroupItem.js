import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useGroupsValue, useSelectedGroupValue } from '../../context';
import { firebase } from '../../firebase';
import { Container, ColoredDot, TaskName, DeleteButton } from './TaskGroupItem.styled';

export const TaskGroupItem = ({ group }) => {
  const { groups, setGroups } = useGroupsValue();
  const { setSelectedGroup } = useSelectedGroupValue();

  const deleteGroup = docId => {
    firebase
      .firestore()
      .collection('groups')
      .doc(docId)
      .delete()
      .then(() => {
        setGroups([...groups]);
        setSelectedGroup('ALL');
      });
  };

  return (
    <Container>
      <ColoredDot />
      <TaskName>{group.name}</TaskName>
      <DeleteButton onClick={() => deleteGroup(group.docId)}>
        <FaTrashAlt />
      </DeleteButton>
    </Container>
  );
};
