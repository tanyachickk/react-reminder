import React, { useRef, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import { firebase } from "../../firebase";
import {
  Container,
  ColoredDot,
  Controls,
  DeleteButton,
  EditButton
} from "./TaskGroupItem.styles";
import { getEventPath } from "../../helpers";
import { TextInput } from "../TextInput";
import { ConfirmationModal } from "../ConfirmationModal";

export const TaskGroupItem = ({ group, active, onSelect }) => {
  const { t } = useTranslation();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isShowConfirmation, setIsShowConformation] = useState(false);
  const [relatedTasks, setRelatedTasks] = useState(null);
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
    console.log("FIREBASE DELETE GROUP");
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
    if (relatedTasks) {
      relatedTasks.forEach(documentSnapshot => {
        firebase
          .firestore()
          .collection("tasks")
          .doc(documentSnapshot.id)
          .delete();
      });
    }
    setRelatedTasks(null);
  };

  const checkGroupTasks = async () => {
    console.log("FIREBASE GET RELATED TASKS");
    const relatedTasksSnapshot = await firebase
      .firestore()
      .collection("tasks")
      .where("groupId", "==", group.id)
      .get();

    if (!relatedTasksSnapshot.empty) {
      setIsShowConformation(true);
      setRelatedTasks(relatedTasksSnapshot);
      setSelectedGroup(group.id);
      return;
    }
    deleteGroup();
  };

  const editGroup = () => {
    console.log("FIREBASE EDIT GROUP");
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
          <DeleteButton ref={deleteButtonRef} onClick={checkGroupTasks}>
            <FiTrash />
          </DeleteButton>
        </Controls>
      )}
      <ConfirmationModal
        isVisible={isShowConfirmation}
        title={t("deleteGroupConfirmationTitle") + ` "${group.name}"?`}
        text={t("deleteGroupConfirmationText")}
        confirmText={t("deleteGroupConfirmationAction")}
        onCancel={() => setIsShowConformation(false)}
        onConfirm={deleteGroup}
      ></ConfirmationModal>
    </Container>
  );
};
