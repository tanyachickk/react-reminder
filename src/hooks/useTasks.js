import { useState, useEffect } from "react";
import moment from "moment";
import { firebase } from "../firebase";
import { collatedTasksExists } from "../helpers";

export const useTasks = (userId, selectedGroup) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", userId)
      .orderBy("created");

    console.log("FIREBASE USE TASKS");

    if (!collatedTasksExists(selectedGroup)) {
      unsubscribe = unsubscribe.where("groupId", "==", selectedGroup);
    }

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const allTasks = snapshot.docs.map(task => ({
        ...task.data(),
        id: task.id
      }));

      let resultTasks = allTasks;
      switch (selectedGroup) {
        case "TODAY":
          resultTasks = resultTasks.filter(
            task => task.date && moment().isSame(task.date.toDate(), "day")
          );
          break;
        case "NEXT_WEEK":
          resultTasks = resultTasks.filter(
            task =>
              task.date &&
              moment(task.date.toDate()).isBetween(
                moment(),
                moment().add(1, "week"),
                "day",
                "[]"
              )
          );
          break;
        case "NEXT_MONTH":
          resultTasks = resultTasks.filter(
            task =>
              task.date &&
              moment(task.date.toDate()).isBetween(
                moment(),
                moment().add(1, "month"),
                "day",
                "[]"
              )
          );
          break;
        case "SCHEDULED":
          resultTasks = resultTasks.filter(task => task.date);
          break;
        case "FLAGGED":
          resultTasks = resultTasks.filter(task => task.flagged);
          break;
        default:
          break;
      }

      setTasks(resultTasks);
    });

    return () => unsubscribe();
  }, [selectedGroup, userId]);

  return { tasks };
};
