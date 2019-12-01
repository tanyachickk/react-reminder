import React, { useRef, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { FiCalendar, FiTrash } from "react-icons/fi";
import { firebase } from "../../firebase";
import {
  Container,
  Controls,
  DeleteButton,
  EditButton,
  Content,
  DateTime,
  ResetDateContainer,
  ResetDateButton
} from "./TaskItem.styles";
import { TextInput } from "../TextInput";
import { BaseCheckbox } from "../BaseCheckbox";

export const TaskItem = ({ task }) => {
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
        flagged: value,
        updated: new Date()
      });
  };

  const setTaskDate = date => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(task.id)
      .update({
        date
      });
  };

  const DateControl = forwardRef(({ value, onClick }, ref) => (
    <DateTime ref={ref} onClick={onClick}>
      {value}
    </DateTime>
  ));

  const NewDateControl = forwardRef(({ value, onClick }, ref) => (
    <EditButton ref={ref} onClick={onClick}>
      <FiCalendar />
    </EditButton>
  ));

  return (
    <Container onDoubleClick={() => setIsEditMode(true)}>
      <BaseCheckbox checked={task.flagged} onChange={onFlag} />
      <Content completed={task.flagged}>
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
            customInput={<DateControl />}
            timeInputLabel="Time:"
            dateFormat="dd.MM.yyyy HH:mm"
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
          {!task.date && (
            <DatePicker
              selected={task.date ? task.date.toDate() : new Date()}
              onChange={date => setTaskDate(date)}
              popperPlacement="left-start"
              customInput={
                <NewDateControl
                  ref={editButtonRef}
                  onClick={() => setIsEditMode(true)}
                />
              }
              timeInputLabel="Time:"
              dateFormat="dd.MM.yyyy HH:mm"
              showTimeInput
            >
              <ResetDateContainer>
                <ResetDateButton onClick={() => setTaskDate(null)}>
                  clear date
                </ResetDateButton>
              </ResetDateContainer>
            </DatePicker>
          )}
          <DeleteButton ref={deleteButtonRef} onClick={deleteTask}>
            <FiTrash />
          </DeleteButton>
        </Controls>
      )}
    </Container>
  );
};
