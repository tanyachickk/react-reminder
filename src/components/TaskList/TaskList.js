import React, { useState, useEffect } from "react";
import { firebase } from "../../firebase";
import { useSession } from "../../context/UserContext";
import { useTasks } from "../../hooks/useTasks";
import { collatedTasksExists } from "../../helpers";
import { useGroups } from "../../hooks/useGroups";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import {
  Container,
  PageHeader,
  PageTitle,
  List,
  PageContent
} from "./TaskList.styled";
import { TaskItem } from "../TaskItem";

export const TaskList = () => {
  const [title, setTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  const { selectedGroup } = useSelectedGroupValue();
  const { user } = useSession();
  const { tasks } = useTasks(user.uid, selectedGroup);
  const { groups } = useGroups(user.uid);

  useEffect(() => {
    const currentGroup =
      collatedTasksExists(selectedGroup) ||
      groups.find(group => group.id === selectedGroup);
    currentGroup && setTitle(currentGroup.name);
  }, [selectedGroup, groups]);

  const createTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .add({
        groupId: selectedGroup,
        userId: user.uid,
        text: newTask,
        flagged: false,
        date: null,
        created: new Date()
      })
      .then(() => {
        setNewTask("");
      });
  };

  const onKeydown = ({ key }) => {
    switch (key) {
      case "Enter":
        createTask();
        break;
      default:
        break;
    }
  };

  const onFlag = (id, value) => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(id)
      .update({
        flagged: value
      })
      .then(() => {});
  };

  return (
    <Container>
      <PageHeader>
        <PageTitle>{title}</PageTitle>
      </PageHeader>
      <PageContent>
        <List>
          {tasks.map(task => (
            <TaskItem key={`${task.id}`} task={task}></TaskItem>
          ))}
          <input
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            onKeyDown={onKeydown}
          />
        </List>
      </PageContent>
    </Container>
  );
};
