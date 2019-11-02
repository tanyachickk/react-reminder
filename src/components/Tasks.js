import React from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';
// import classNames from 'classnames/bind';
// import styles from './Tasks.module.scss';

// const cx = classNames.bind(styles);

export const Tasks = () => {
  const { tasks } = useTasks('1');

  console.log(tasks);

  let projectName = '';

  return (
    <div className="tasks">
      <h2>{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id="task.id" />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
