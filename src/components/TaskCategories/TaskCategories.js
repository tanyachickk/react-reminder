import React from "react";
import { useSelectedGroupValue } from "../../context/SelectedGroupContext";
import { useTranslation } from "react-i18next";
import { collatedTasks } from "../../constants/values";
import { Container, CategoryItem, CategoryName } from "./TaskCategories.styles";

export const TaskCategories = () => {
  const { selectedGroup, setSelectedGroup } = useSelectedGroupValue();
  const { t } = useTranslation();

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
          <CategoryName>{t(key)}</CategoryName>
        </CategoryItem>
      ))}
    </Container>
  );
};
