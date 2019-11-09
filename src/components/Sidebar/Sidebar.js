import React from 'react';
import { withTheme } from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';
import { Logo } from '../Logo';
import {
  Container,
  LogoLink,
  SearchInputContainer,
  TextDivider,
  TaskGroupListContainer,
  AddButton,
  AddButtonText,
  ProfileContainer,
} from './Sidebar.styled';
import { TaskCategories } from '../TaskCategories';
import { TaskGroupList } from '../TaskGroupList';
import SearchInput from '../SearchInput/SearchInput';
import { ProfileInfo } from '../ProfileInfo';

const Sidebar = () => {
  return (
    <Container>
      <LogoLink href="/">
        <Logo />
      </LogoLink>
      <SearchInputContainer>
        <SearchInput />
      </SearchInputContainer>
      <TaskCategories />
      <TextDivider>My lists</TextDivider>
      <TaskGroupListContainer>
        <TaskGroupList />
      </TaskGroupListContainer>
      {/* <AddButton>
        <IoIosAddCircle />
        <AddButtonText>Add new list</AddButtonText>
      </AddButton> */}
      <ProfileContainer>
        <ProfileInfo></ProfileInfo>
      </ProfileContainer>
    </Container>
  );
};

export default withTheme(Sidebar);
