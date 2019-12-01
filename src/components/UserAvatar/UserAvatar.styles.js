import styled from "styled-components";
import { avatarBackground } from "../../constants/theme";

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  color: white;
  border-radius: 50%;
  font-size: ${props => `${props.size / 2}px`};
  background-color: ${avatarBackground};
  overflow: hidden;
`;

export const Initials = styled.div``;
