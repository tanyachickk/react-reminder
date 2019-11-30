import React from "react";
import { Container, Content } from "./NewTask.styled";
import { TextInput } from "../TextInput";
import { BaseCheckbox } from "../BaseCheckbox";

export const NewTask = ({
  value,
  isEditMode,
  createTask,
  onClick,
  onChange
}) => {
  return (
    <Container onClick={onClick}>
      <BaseCheckbox checked={false} disabled={true} hidden={!isEditMode} />
      <Content>
        <TextInput
          value={value}
          isEditMode={isEditMode}
          showBackgroundOnFocus={false}
          onChange={onChange}
          onEnter={createTask}
          onEscape={createTask}
          onClickAway={createTask}
        />
      </Content>
    </Container>
  );
};
