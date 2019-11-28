import React, { useRef, useState, forwardRef } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { FiCalendar, FiTrash } from "react-icons/fi";
import { firebase } from "../../firebase";
import {
  Container,
  Controls,
  DeleteButton,
  EditButton,
  Content,
  Date,
  ResetDateContainer,
  ResetDateButton
} from "./TaskItem.styled";
import { TextInput } from "../TextInput";
import { BaseCheckbox } from "../BaseCheckbox";

export const TaskItem = ({ task, active, onSelect }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentValue, setCurrentValue] = useState(task.text);
  const deleteButtonRef = useRef();
  const editButtonRef = useRef();

  const deleteTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(task.id)
      .delete();
  };

  const editTask = () => {
    if (!currentValue) {
      return;
    }
    setIsEditMode(false);
    firebase
      .firestore()
      .collection("tasks")
      .doc(task.id)
      .update({
        text: currentValue
      });
  };

  const onFlag = value => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(task.id)
      .update({
        flagged: value
      })
      .then(() => {});
  };

  const setTaskDate = date => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(task.id)
      .update({
        date
      })
      .then(() => {});
  };

  const DateControl = forwardRef(({ value, onClick }, ref) => (
    <Date ref={ref} onClick={onClick}>
      {value}
    </Date>
  ));

  const NewDateControl = forwardRef(({ value, onClick }, ref) => (
    <EditButton ref={ref} onClick={onClick}>
      <FiCalendar />
    </EditButton>
  ));

  return (
    <Container active={active} onDoubleClick={() => setIsEditMode(true)}>
      <BaseCheckbox checked={task.flagged} onChange={onFlag} />
      <Content>
        <TextInput
          value={currentValue}
          isEditMode={isEditMode}
          showBackgroundOnFocus={false}
          onChange={value => setCurrentValue(value)}
          onEnter={editTask}
          onEscape={editTask}
          onClickAway={editTask}
        />
        {task.date && (
          <DatePicker
            selected={task.date.toDate()}
            onChange={date => setTaskDate(date)}
            calendarClassName="custom-calendar"
            customInput={<DateControl />}
            timeInputLabel="Time:"
            dateFormat="dd.MM.yyyy hh:mm"
            showTimeInput
          >
            <ResetDateContainer>
              <ResetDateButton onClick={() => setTaskDate(null)}>
                clear date
              </ResetDateButton>
            </ResetDateContainer>
          </DatePicker>
        )}
      </Content>
      {!isEditMode && (
        <Controls>
          <DatePicker
            selected={task.date ? task.date.toDate() : null}
            onChange={date => setTaskDate(date)}
            calendarClassName="custom-calendar"
            popperPlacement="left-center"
            customInput={
              <NewDateControl
                ref={editButtonRef}
                onClick={() => setIsEditMode(true)}
              />
            }
            timeInputLabel="Time:"
            dateFormat="dd.MM.yyyy hh:mm"
            showTimeInput
          >
            <ResetDateContainer>
              <ResetDateButton onClick={() => setTaskDate(null)}>
                clear date
              </ResetDateButton>
            </ResetDateContainer>
          </DatePicker>
          <DeleteButton ref={deleteButtonRef} onClick={deleteTask}>
            <FiTrash />
          </DeleteButton>
        </Controls>
      )}
    </Container>
  );
};
