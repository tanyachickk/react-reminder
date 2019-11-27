import React, { useState } from "react";
import moment from "moment";
import { firebase } from "../../firebase";
import { useSession } from "../../context/UserContext";
import { useTasks } from "../../hooks/useTasks";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import { Container, TaskItem, TaskName } from "./TaskList.styled";

export const TaskList = () => {
  const [newTask, setNewTask] = useState("");
  const { selectedGroup } = useSelectedGroupValue();
  const { user } = useSession();
  const { tasks } = useTasks(user.uid, selectedGroup);

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
      {tasks.map(task => (
        <TaskItem key={`${task.id}`}>
          <input
            checked={task.flagged}
            type="checkbox"
            onChange={e => onFlag(task.id, e.target.checked)}
          />
          <TaskName>{task.text}</TaskName>
          <div>{`${
            task.date
              ? moment(task.date && task.date.toDate()).format(
                  "DD.MM.YYYY, HH:ss"
                )
              : ""
          }`}</div>
        </TaskItem>
      ))}
      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        onKeyDown={onKeydown}
      />
    </Container>
  );
};
