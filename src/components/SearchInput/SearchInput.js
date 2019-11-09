import React from 'react';
import { withTheme } from 'styled-components';
import { Input, Container, Icon } from './SearchInput.styled';
import { IoIosSearch } from 'react-icons/io';

const SearchInput = () => {
  return (
    <Container>
      <Input placeholder="Search" />
      <Icon>
        <IoIosSearch />
      </Icon>
    </Container>
  );
};

export default withTheme(SearchInput);
