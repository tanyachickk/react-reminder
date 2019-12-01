import React, { useRef } from "react";
import { withTheme } from "styled-components";
import { PoseGroup } from "react-pose";
import { Overlay, Content } from "./Modal.styles";

const Modal = ({ children, isVisible, onCancel }) => {
  const overlayRef = useRef();

  const onClick = e => {
    if (e.target === overlayRef.current) {
      onCancel();
    }
  };
  return (
    <PoseGroup>
      {isVisible && (
        <Overlay ref={overlayRef} key="overlay" onClick={onClick}>
          <Content key="content">{children}</Content>
        </Overlay>
      )}
    </PoseGroup>
  );
};

export default withTheme(Modal);
