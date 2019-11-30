import React from "react";
import { withTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import {
  Container,
  LogoLink,
  SearchInputContainer,
  TextDivider,
  TaskGroupListContainer,
  ProfileContainer
} from "./Sidebar.styles";
import { TaskCategories } from "../TaskCategories";
import { TaskGroupList } from "../TaskGroupList";
import SearchInput from "../SearchInput/SearchInput";
import { ProfileInfo } from "../ProfileInfo";

const Sidebar = ({ onUserInfoClick }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <LogoLink href="/">
        <Logo />
      </LogoLink>
      <SearchInputContainer>
        <SearchInput />
      </SearchInputContainer>
      <TaskCategories />
      <TextDivider>{t("taskGroupsDivider")}</TextDivider>
      <TaskGroupListContainer>
        <TaskGroupList />
      </TaskGroupListContainer>
      <ProfileContainer onClick={onUserInfoClick}>
        <ProfileInfo></ProfileInfo>
      </ProfileContainer>
    </Container>
  );
};

export default withTheme(Sidebar);
