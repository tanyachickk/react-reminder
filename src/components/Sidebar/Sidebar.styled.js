import styled from "styled-components";
import {
  primaryTextColor,
  sidebarBackgroundColor,
  borderColor,
  secondaryTextColor
} from "../../constants/theme";
import { headerHeight } from "../../constants/sizes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${sidebarBackgroundColor};
  border-right: 1px solid ${borderColor};
  overflow: hidden;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  height: ${headerHeight};
  width: 100%;
  padding-left: 1rem;
  color: ${primaryTextColor};
  text-decoration: none;
  transition: opacity 0.2s ease;
`;

export const SearchInputContainer = styled.div`
  margin: 0.25rem 1rem 0.75rem;
`;

export const ProfileContainer = styled.button`
  margin-top: auto;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
`;

export const TextDivider = styled.div`
  margin: 1rem 0.5rem 0.5rem;
  color: ${secondaryTextColor};
  font-size: 0.75rem;
  font-weight: 600;
`;

export const TaskGroupListContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;
