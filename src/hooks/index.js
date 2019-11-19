import { useState, useEffect } from "react";
import moment from "moment";
import { firebase } from "../firebase";
import { collatedTasksExists } from "../helpers";
import { USER_ID } from "../constants/values";

export const useTasks = selectedGroup => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", USER_ID);

    unsubscribe =
      selectedGroup && !collatedTasksExists(selectedGroup)
        ? (unsubscribe = unsubscribe.where("groupId", "==", selectedGroup))
        : selectedGroup === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedGroup === "INBOX" || selectedGroup === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        ...task.data(),
        id: task
      }));

      setTasks(
        selectedGroup === "NEXT_WEEK"
          ? newTasks.filter(
              task =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter(task => task.archived !== true)
      );

      setArchivedTasks(newTasks.filter(task => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedGroup]);

  return { tasks, archivedTasks };
};

export const useGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("groups")
      .where("userId", "==", USER_ID)
      .orderBy("groupId")
      .get()
      .then(snapshot => {
        const allGroups = snapshot.docs.map(group => ({
          ...group.data(),
          docId: group.id
        }));

        if (JSON.stringify(allGroups) !== JSON.stringify(groups)) {
          setGroups(allGroups);
        }
      });
  }, [groups]);

  return { groups, setGroups };
};
