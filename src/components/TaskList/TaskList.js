import React, { useState, useEffect, useRef, useCallback } from "react";
import { firebase } from "../../firebase";
import { ScrollToHOC } from "react-scroll-to";
import { PoseGroup } from "react-pose";
import { useSession } from "../../context/UserContext";
import { useTasks } from "../../hooks/useTasks";
import { collatedTasksExists } from "../../helpers";
import { useGroups } from "../../hooks/useGroups";
import { useTranslation } from "react-i18next";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import {
  PoseItem,
  Container,
  PageHeader,
  PageTitle,
  PageContent,
  EmptyList,
  FlaggedTasksInfo,
  FlaggedTasksCount,
  FlaggedTasksText,
  FlaggedTasksButton
} from "./TaskList.styles";
import { TaskItem } from "../TaskItem";
import { NewTask } from "../NewTask";
import { ActionButton } from "../ActionButton";
import { IoIosAdd } from "react-icons/io";

const TaskList = ({ scroll }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [isAllowToCreateTask, setIsAllowToCreateTask] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [isEditNewTask, setIsEditNewTask] = useState(false);
  const [isShowCompletedTasks, setIsShowCompletedTasks] = useState(false);
  const { selectedGroup } = useSelectedGroupValue();
  const { user } = useSession();
  const { tasks } = useTasks(user.uid, selectedGroup);
  const { groups } = useGroups(user.uid);
  const listRef = useRef();

  const flaggedTasks =
    selectedGroup !== "FLAGGED"
      ? tasks
          .filter(task => task.flagged)
          .sort((a, b) => +b.updated.toDate() - +a.updated.toDate())
      : [];
  const currentTasks =
    selectedGroup !== "FLAGGED" ? tasks.filter(task => !task.flagged) : tasks;

  const tasksList = isShowCompletedTasks
    ? [...flaggedTasks, ...currentTasks]
    : [...currentTasks];

  useEffect(() => {
    const taskCaterory = collatedTasksExists(selectedGroup);
    if (taskCaterory) {
      setTitle(taskCaterory.key);
      setIsAllowToCreateTask(false);
    } else {
      const taskGroup = groups.find(group => group.id === selectedGroup);
      if (taskGroup) {
        setTitle(taskGroup.name);
        setIsAllowToCreateTask(true);
      }
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
    console.log("FIREBASE CREATE TASK");
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
        <PageTitle>{t(title)}</PageTitle>
        {isAllowToCreateTask && (
          <ActionButton withPadding={false} onClick={onAddButtonClick}>
            <IoIosAdd size={22} />
          </ActionButton>
        )}
      </PageHeader>
      <PageContent>
        {!!flaggedTasks.length && (
          <FlaggedTasksInfo>
            <FlaggedTasksCount>{flaggedTasks.length}</FlaggedTasksCount>
            <FlaggedTasksText>{t("completedTasksCountLabel")}</FlaggedTasksText>
            <FlaggedTasksButton
              onClick={() => setIsShowCompletedTasks(!isShowCompletedTasks)}
            >
              {isShowCompletedTasks
                ? t("hideCompletedTasks")
                : t("showCompletedTasks")}
            </FlaggedTasksButton>
          </FlaggedTasksInfo>
        )}
        <PoseGroup>
          {tasksList.map(task => (
            <PoseItem key={`${task.id}`}>
              <TaskItem task={task}></TaskItem>
            </PoseItem>
          ))}
        </PoseGroup>
        {isAllowToCreateTask && (
          <NewTask
            value={newTask}
            isEditMode={isEditNewTask}
            createTask={createTask}
            onClick={setIsEditNewTask}
            onChange={setNewTask}
          />
        )}
        <EmptyList />
      </PageContent>
    </Container>
  );
};

export default ScrollToHOC(TaskList);
