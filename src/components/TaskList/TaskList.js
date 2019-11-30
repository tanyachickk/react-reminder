import React, { useState, useEffect, useRef, useCallback } from "react";
import { firebase } from "../../firebase";
import { ScrollToHOC } from "react-scroll-to";
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
  PageContent,
  EmptyList
} from "./TaskList.styles";
import { TaskItem } from "../TaskItem";
import { NewTask } from "../NewTask";
import { ActionButton } from "../ActionButton";
import { IoIosAdd } from "react-icons/io";

const TaskList = ({ scroll }) => {
  const [title, setTitle] = useState("");
  const [isAllowToCreateTask, setIsAllowToCreateTask] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [isEditNewTask, setIsEditNewTask] = useState(false);
  const { selectedGroup } = useSelectedGroupValue();
  const { user } = useSession();
  const { tasks } = useTasks(user.uid, selectedGroup);
  const { groups } = useGroups(user.uid);
  const listRef = useRef();

  useEffect(() => {
    const taskCaterory = collatedTasksExists(selectedGroup);
    if (taskCaterory) {
      setTitle(taskCaterory.name);
      setIsAllowToCreateTask(false);
    } else {
      const taskGroup = groups.find(group => group.id === selectedGroup);
      setTitle(taskGroup.name);
      setIsAllowToCreateTask(true);
    }
  }, [selectedGroup, groups]);

  const scrollListToBottom = useCallback(() => {
    const { height } = listRef.current.getBoundingClientRect();
    scroll({ ref: listRef, y: height });
  }, [scroll]);

  const onAddButtonClick = () => {
    scrollListToBottom();
    setIsEditNewTask(true);
  };

  const createTask = () => {
    setIsEditNewTask(false);
    if (!newTask) {
      return;
    }
    setNewTask("");
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
        setIsEditNewTask(true);
        scrollListToBottom();
      });
  };

  return (
    <Container ref={listRef}>
      <PageHeader>
        <PageTitle>{title}</PageTitle>
        {isAllowToCreateTask && (
          <ActionButton onClick={onAddButtonClick}>
            <IoIosAdd size={22} />
          </ActionButton>
        )}
      </PageHeader>
      <PageContent>
        <List>
          {tasks.map(task => (
            <TaskItem key={`${task.id}`} task={task}></TaskItem>
          ))}
          {isAllowToCreateTask && (
            <NewTask
              value={newTask}
              isEditMode={isEditNewTask}
              createTask={createTask}
              onClick={setIsEditNewTask}
              onChange={setNewTask}
            />
          )}
        </List>
        <EmptyList />
      </PageContent>
    </Container>
  );
};

export default ScrollToHOC(TaskList);
