import React from "react";
import { Container, SidebarWrapper, ContentWrapper } from "./MainLayout.styles";

export const MainLayout = ({ header, sidebar, content }) => {
  return (
    <Container>
      <SidebarWrapper>{sidebar}</SidebarWrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </Container>
  );
};
