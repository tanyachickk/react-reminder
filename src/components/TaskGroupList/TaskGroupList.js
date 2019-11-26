import React, { useState, useRef } from "react";
import { firebase } from "../../firebase";
import { useSession } from "../../context/UserContext";
import { ScrollToHOC } from "react-scroll-to";
import { IoIosAddCircle } from "react-icons/io";
import { useSelectedGroupValue } from "../../context/selectedGroupContext";
import { TaskGroupItem } from "../TaskGroupItem";
import {
  Container,
  List,
  Item,
  AddButton,
  AddButtonText
} from "./TaskGroupList.styled";
import { TextInput } from "../TextInput";
import { useGroups } from "../../hooks/useGroups";

const defaultGroupValue = "New group";

const TaskGroupList = ({ scroll }) => {
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [groupName, setGroupName] = useState(defaultGroupValue);
  const { selectedGroup, setSelectedGroup } = useSelectedGroupValue();
  const { user } = useSession();
  const { groups } = useGroups(user.uid);

  const listRef = useRef();

  const addGroup = () => {
    if (!groupName) {
      return;
    }
    const name = groupName;
    setGroupName(defaultGroupValue);
    setShowNewGroup(false);
    groupName &&
      firebase
        .firestore()
        .collection("groups")
        .add({
          name: name,
          userId: user.uid,
          created: new Date()
        });
  };

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
            <Item key={group.id} active={group.id === selectedGroup}>
              <TaskGroupItem
                group={group}
                onSelect={() => {
                  setSelectedGroup(group.id);
                }}
              />
            </Item>
          ))}
        {showNewGroup && (
          <TextInput
            value={groupName}
            onChange={setGroupName}
            onSave={addGroup}
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
