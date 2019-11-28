import styled from "styled-components";
import { borderColor, backgroundColor } from "../../constants/theme";

export const Container = styled.div`
  padding: 0 1rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const PageHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${borderColor};
  background-color: ${backgroundColor};
`;

export const PageContent = styled.div`
  padding-bottom: 2rem;
`;

export const List = styled.div``;

export const PageTitle = styled.h2`
  font-size: 2rem;
  margin: 1.75rem 0 0.25rem;
`;
