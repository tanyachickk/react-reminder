import React, { useRef, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import { firebase } from "../../firebase";
import {
  Container,
  ColoredDot,
  Controls,
  DeleteButton,
  EditButton
} from "./TaskGroupItem.styled";
import { getEventPath } from "../../helpers";
import { TextInput } from "../TextInput";

export const TaskGroupItem = ({ group, active, onSelect }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentValue, setCurrentValue] = useState(group.name);
  const deleteButtonRef = useRef();
  const editButtonRef = useRef();
  const { selectedGroup, setSelectedGroup } = useSelectedGroupValue();

  const onClick = e => {
    const path = getEventPath(e);
    if (
      !path.includes(deleteButtonRef.current) &&
      !path.includes(editButtonRef.current)
    ) {
      onSelect();
    }
  };

  const deleteGroup = () => {
    firebase
      .firestore()
      .collection("groups")
      .doc(group.id)
      .delete()
      .then(() => {
        if (selectedGroup === group.id) {
          setSelectedGroup("ALL");
        }
      });
  };

  const editGroup = () => {
    if (!currentValue) {
      return;
    }
    setIsEditMode(false);
    firebase
      .firestore()
      .collection("groups")
      .doc(group.id)
      .update({
        name: currentValue
      });
  };

  return (
    <Container
      active={active}
      onClick={onClick}
      onDoubleClick={() => setIsEditMode(true)}
    >
      <ColoredDot />
      <TextInput
        value={currentValue}
        isReadOnly={!isEditMode}
        isEditMode={isEditMode}
        onChange={value => setCurrentValue(value)}
        onEnter={editGroup}
        onEscape={editGroup}
        onClickAway={editGroup}
      />
      {!isEditMode && (
        <Controls>
          <EditButton ref={editButtonRef} onClick={() => setIsEditMode(true)}>
            <FiEdit />
          </EditButton>
          <DeleteButton ref={deleteButtonRef} onClick={deleteGroup}>
            <FiTrash />
          </DeleteButton>
        </Controls>
      )}
    </Container>
  );
};
