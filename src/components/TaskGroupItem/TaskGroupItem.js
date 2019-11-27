import React, { useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import { firebase } from "../../firebase";
import {
  Container,
  ColoredDot,
  TaskName,
  DeleteButton
} from "./TaskGroupItem.styled";
import { getEventPath } from "../../helpers";

export const TaskGroupItem = ({ group, onSelect }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const deleteButtonRef = useRef();
  const { selectedGroup, setSelectedGroup } = useSelectedGroupValue();

  const onClick = e => {
    const path = getEventPath(e);
    if (!path.includes(deleteButtonRef.current)) {
      onSelect();
    }
  };

  const deleteGroup = id => {
    firebase
      .firestore()
      .collection("groups")
      .doc(id)
      .delete()
      .then(() => {
        if (selectedGroup === id) {
          setSelectedGroup("ALL");
        }
      });
  };

  return (
    <Container onClick={onClick} onDoubleClick={() => setIsEditMode(true)}>
      <ColoredDot />
      <TaskName>{group.name}</TaskName>
      <DeleteButton ref={deleteButtonRef} onClick={() => deleteGroup(group.id)}>
        <FaTrashAlt />
      </DeleteButton>
    </Container>
  );
};
