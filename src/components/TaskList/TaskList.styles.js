import styled from "styled-components";
import {
  borderColor,
  backgroundColor,
  primaryTextColor,
  accentColor
} from "../../constants/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 1.75rem 0 0.25rem;
  justify-content: space-between;
  border-bottom: 1px solid ${borderColor};
  background-color: ${backgroundColor};
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 2rem;
  font-size: 14px;
`;

export const FlaggedTasksInfo = styled.div`
  display: flex;
  align-items: center;
  line-height: 3rem;
  border-bottom: 1px solid ${borderColor};
  color: ${primaryTextColor};
  font-size: 16px;
`;

export const FlaggedTasksCount = styled.div`
  width: 48px;
  text-align: center;
`;

export const FlaggedTasksText = styled.div`
  flex-grow: 1;
`;

export const FlaggedTasksButton = styled.button`
  color: ${accentColor};
  background-color: transparent;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const EmptyList = styled.div`
  flex-grow: 1;
  margin-left: 48px;
  background-image: linear-gradient(
    to bottom,
    ${backgroundColor} 47px,
    ${borderColor} 1px
  );
  background-size: 100% 48px;
`;

export const PageTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;
