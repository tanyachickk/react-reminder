import styled from "styled-components";
import { borderColor } from "../../constants/theme";

export const Container = styled.div`
  padding: 0 1rem 1rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${borderColor};
`;

export const PageTitle = styled.h2`
  font-size: 2rem;
  margin: 1.75rem 0 0.25rem;
`;
