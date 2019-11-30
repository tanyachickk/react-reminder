import { collatedTasks } from "../constants/values";

export const collatedTasksExists = selectedGroup =>
  collatedTasks.find(category => category.key === selectedGroup);

export const getEventPath = e => {
  let path = e.path || (e.composedPath && e.composedPath()) || [];
  if (!path.length) {
    let target = e.target;
    while (target.parentNode) {
      path.push(target);
      target = target.parentNode;
    }
  }
  return path;
};
