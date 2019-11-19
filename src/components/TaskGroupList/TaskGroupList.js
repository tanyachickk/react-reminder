import React, { useState, useRef } from "react";
import { ScrollToHOC } from "react-scroll-to";
import { IoIosAddCircle } from "react-icons/io";
import { useSelectedGroupValue, useGroupsValue } from "../../context";
import { TaskGroupItem } from "../TaskGroupItem";
import {
  Container,
  List,
  Item,
  AddButton,
  AddButtonText
} from "./TaskGroupList.styled";
import { USER_ID } from "../../constants/values";
import { firebase } from "../../firebase";
import uuidv1 from "uuid/v1";
import { TextInput } from "../TextInput";

const defaultGroupValue = "New group";

const TaskGroupList = ({ scroll }) => {
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [groupName, setGroupName] = useState(defaultGroupValue);
  const { selectedGroup, setSelectedGroup } = useSelectedGroupValue();
  const { groups, setGroups } = useGroupsValue();

  const listRef = useRef();
  const groupId = uuidv1();

  const addProject = () =>
    groupName &&
    firebase
      .firestore()
      .collection("groups")
      .add({
        groupId,
        name: groupName,
        userId: USER_ID
      })
      .then(() => {
        setGroups([]);
        setGroupName(defaultGroupValue);
        setShowNewGroup(false);
      });

  const scrollListToBottom = () => {
    const { height } = listRef.current.getBoundingClientRect();
    scroll({ ref: listRef, y: height });
  };

  const onShowNewGroup = () => {
    setShowNewGroup(true);
    scrollListToBottom();
  };

  return (
    <Container>
      <List ref={listRef}>
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
        {showNewGroup && (
          <TextInput
            value={groupName}
            onChange={setGroupName}
            onSave={addProject}
          />
        )}
      </List>
      <AddButton onClick={onShowNewGroup}>
        <IoIosAddCircle />
        <AddButtonText>Add new list</AddButtonText>
      </AddButton>
    </Container>
  );
};

export default ScrollToHOC(TaskGroupList);
