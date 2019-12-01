import styled from "styled-components";
import posed from "react-pose";
import {
  backgroundColor,
  primaryTextColor,
  secondaryTextColor,
  shadowColor
} from "../../constants/theme";

const PoseDropdown = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut"
    }
  },
  exit: {
    y: "20%",
    opacity: 0,
    transition: {
      ease: "easeInOut"
    }
  }
});

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 120px;
  font-size: 14px;
  color: ${primaryTextColor};
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
  color: ${secondaryTextColor};
  transform: ${props => props.isOpen && "rotate(180deg) translateY(25%)"};
  transition: transform 0.2s ease;
`;

export const Dropdown = styled(PoseDropdown)`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  left: -10px;
  padding: 10px 14px;
  background: ${backgroundColor};
  box-shadow: 0 5px 10px 0px ${shadowColor}, 0 3px 5px 1px ${shadowColor};
  border-radius: 5px;
  z-index: 5;
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
`;

export const Flag = styled.img`
  height: 14px;
  width: 22px;
  margin-right: 10px;
`;

export const Country = styled.span``;
