import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 'sidebar header' 'sidebar content';
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
`;

export const SidebarWrapper = styled.div`
  grid-area: sidebar;
`;

export const ContentWrapper = styled.div`
  grid-area: content;
`;
