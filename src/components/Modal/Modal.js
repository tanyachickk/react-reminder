import React from "react";
import { withTheme } from "styled-components";
import { PoseGroup } from "react-pose";
import { Overlay, Content } from "./Modal.styles";

const Modal = ({ children, isVisible, onCancel }) => {
  return (
    <PoseGroup>
      {isVisible && (
        <Overlay key="overlay" onClick={onCancel}>
          <Content key="content">{children}</Content>
        </Overlay>
      )}
    </PoseGroup>
  );
};

export default withTheme(Modal);
