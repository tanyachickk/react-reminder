import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { firebase } from "../../firebase";
import { useSession } from "../../context/UserContext";
import { ScrollToHOC } from "react-scroll-to";
import { IoIosAddCircle } from "react-icons/io";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import { TaskGroupItem } from "../TaskGroupItem";
import { TextInput } from "../TextInput";
import { useGroups } from "../../hooks/useGroups";
import {
  Container,
  List,
  Item,
  AddButton,
  AddButtonText,
  AddInputContainer
} from "./TaskGroupList.styles";

const defaultGroupValue = "New group";

const TaskGroupList = ({ scroll }) => {
  const { t } = useTranslation();
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [groupName, setGroupName] = useState(defaultGroupValue);
  const { selectedGroup, setSelectedGroup } = useSelectedGroupValue();
  const { user } = useSession();
  const { groups } = useGroups(user.uid);

  const listRef = useRef();

  const addGroup = () => {
    const name = groupName;
    setGroupName(defaultGroupValue);
    setShowNewGroup(false);
    console.log("FIREBASE ADD GROUP");
    if (name) {
      firebase
        .firestore()
        .collection("groups")
        .add({
          name: name,
          userId: user.uid,
          created: new Date()
        })
        .then(value => {
          setSelectedGroup(value.id);
          scrollListToBottom();
        });
    }
  };

  const scrollListToBottom = useCallback(() => {
    const { height } = listRef.current.getBoundingClientRect();
    scroll({ ref: listRef, y: height });
  }, [scroll]);

  const onShowNewGroup = () => {
    setShowNewGroup(true);
  };

  useEffect(() => {
    if (showNewGroup) {
      scrollListToBottom();
    }
  }, [showNewGroup, scrollListToBottom]);

  return (
    <Container>
      <List ref={listRef}>
        {groups &&
          groups.map(group => (
            <Item key={group.id}>
              <TaskGroupItem
                group={group}
                active={group.id === selectedGroup}
                onSelect={() => {
                  setSelectedGroup(group.id);
                }}
              />
            </Item>
          ))}
        {showNewGroup && (
          <AddInputContainer>
            <TextInput
              value={groupName}
              isEditMode={true}
              onChange={setGroupName}
              onEnter={addGroup}
              onEscape={addGroup}
              onClickAway={addGroup}
            />
          </AddInputContainer>
        )}
      </List>
      <AddButton onClick={onShowNewGroup}>
        <IoIosAddCircle />
        <AddButtonText>{t("addNewTaskGroup")}</AddButtonText>
      </AddButton>
    </Container>
  );
};

export default ScrollToHOC(TaskGroupList);
