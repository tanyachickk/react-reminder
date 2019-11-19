import { collatedTasks } from "../constants/values";

export const collatedTasksExists = selectedGroup =>
  collatedTasks.find(task => task.key === selectedGroup);
