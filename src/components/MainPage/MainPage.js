import React, { useState, useEffect } from "react";
import { TaskList } from "../TaskList";
import { Container, PageHeader, PageTitle } from "./MainPage.styled";
import { useSelectedGroupValue } from "../../context/selectedGroupContext";
import { collatedTasksExists } from "../../helpers";
import { useSession } from "../../context/UserContext";
import { useGroups } from "../../hooks/useGroups";

export const MainPage = () => {
  const [title, setTitle] = useState("");
  const { selectedGroup } = useSelectedGroupValue();
  const { user } = useSession();
  const { groups } = useGroups(user.uid);

  useEffect(() => {
    const currentGroup =
      collatedTasksExists(selectedGroup) ||
      groups.find(group => group.id === selectedGroup);
    currentGroup && setTitle(currentGroup.name);
  }, [selectedGroup, groups]);

  return (
    <Container>
      <PageHeader>
        <PageTitle>{title}</PageTitle>
      </PageHeader>
      <TaskList />
    </Container>
  );
};
