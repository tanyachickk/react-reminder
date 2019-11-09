import React from 'react';
import { Container, HeaderWrapper, SidebarWrapper, ContentWrapper } from './MainLayout.styled';

export const MainLayout = ({ header, sidebar, content }) => {
  return (
    <Container>
      <SidebarWrapper>{sidebar}</SidebarWrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </Container>
  );
};
