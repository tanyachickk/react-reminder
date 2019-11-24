import React from "react";
import { TaskList } from "../TaskList";
import { Container, PageHeader, PageTitle } from "./MainPage.styled";
import { useSelectedGroupValue, useGroupsValue } from "../../context";
import { collatedTasksExists } from "../../helpers";

export const MainPage = () => {
  const { selectedGroup } = useSelectedGroupValue();
  const { groups } = useGroupsValue();
  const group =
    collatedTasksExists(selectedGroup) ||
    groups.find(group => group.groupId === selectedGroup);

  return (
    <Container>
      <PageHeader>
        <PageTitle>{group.name}</PageTitle>
      </PageHeader>
      <TaskList />
    </Container>
  );
};
