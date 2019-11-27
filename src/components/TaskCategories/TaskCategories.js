import React from "react";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import { collatedTasks } from "../../constants/values";
import { Container, CategoryItem, CategoryName } from "./TaskCategories.styled";

export const TaskCategories = () => {
  const { selectedGroup, setSelectedGroup } = useSelectedGroupValue();

  return (
    <Container>
      {collatedTasks.map(({ key, name, icon: Icon }) => (
        <CategoryItem
          key={key}
          active={key === selectedGroup}
          onClick={() => {
            setSelectedGroup(key);
          }}
        >
          <Icon />
          <CategoryName>{name}</CategoryName>
        </CategoryItem>
      ))}
    </Container>
  );
};
